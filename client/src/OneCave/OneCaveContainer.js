import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../Redux/actions/oneCave.actions";
import { getPhotos } from "../Redux/actions/photo.actions";
import OneCave from "./OneCave";
import { Alert } from "reactstrap";
import MyCarousel from "../Carousel/Carousel";
import ExpeditionList from "./ExpeditionList";
import { fetchForOneCave } from "../Redux/actions/allExped.actions";

const OneCaveContainer = props => {
  const { id } = props.match.params;
  const { error, isFetching, item } = props.cave;
  const { photo, expeditions } = props;

  useEffect(() => {
    const getData = async id => {
      await props.getOneCave(id);
    };
    getData(id);
  }, [id]);

  return (
    <>
      <MyCarousel photo={photo} />
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      <OneCave item={item} />
      <ExpeditionList items={expeditions} />
    </>
  );
};
const mapStateToProps = store => {
  return {
    cave: store.cave,
    photo: store.photo,
    expeditions: store.expeditions.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOneCave: async _id => {
      await dispatch(FetchIfNeeded(_id));
      await dispatch(fetchForOneCave());
      await dispatch(getPhotos(_id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneCaveContainer);
