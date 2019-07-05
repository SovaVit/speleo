import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../Redux/actions/oneCave.actions";
import { getPhotos } from "../Redux/actions/photo.actions";
import OneCave from "./OneCave";
import { Alert } from "reactstrap";
import MyCarousel from "../Carousel/Carousel";
import ExpeditionList from "./ExpeditionList";

const OneCaveContainer = props => {
  const { id } = props.match.params;
  const { error, isFetching, item } = props.cave;
  const { photo } = props;

  useEffect(() => {
    const getData = async () => {
      await props.getOneCave(id);
    };
    getData();
  }, [id]);

  return (
    <>
      <MyCarousel photo={photo} />
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      <OneCave item={item} />
      <ExpeditionList name={item.name} />
    </>
  );
};
const mapStateToProps = store => {
  return {
    cave: store.cave,
    photo: store.photo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOneCave: _id => {
      dispatch(FetchIfNeeded(_id));
      dispatch(getPhotos(_id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneCaveContainer);
