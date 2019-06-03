import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../Redux/actions/oneCave.actions";
import { getPhotos } from "../Redux/actions/photo.actions";
import OneCave from "./OneCave";
import NavBar from "../NavBar/Nav";
import { Alert } from "reactstrap";
//import NotFound from '../../NotFound/NotFound'

const OneCaveContainer = props => {
  const { id } = props.match.params;
  const { error, isFetching, item } = props.cave;
  const { photo } = props;
  // add Expeditions list, getExpeditions by CaveName
  //add PhotoSlider
  useEffect(() => {
    props.getOneCave(id);
  }, []);

  return (
    <>
      <NavBar />
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      {/* {item === null && <NotFound/>} */}
      <OneCave item={item} photo={photo} />
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
