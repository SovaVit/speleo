import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchIfNeeded } from "../../Redux/actions/oneCave.actions";
import { getPhotos } from "../../Redux/actions/photo.actions";
import { Alert } from "reactstrap";
//import NotFound from '../../NotFound/NotFound'

const OneCave = props => {
  const { id } = props.match.params;
  const { error, isFetching, item } = props.cave;
  const { photo } = props;
  useEffect(() => {
    props.getOne(id);
    props.getPhotoCave(id);
  }, [id]);
  console.log(photo);
  return (
    <>
      {error !== null && <Alert color="danger">Помилка завантаження!</Alert>}
      {isFetching === true && <Alert>Завантаження!</Alert>}
      {/* {item === null && <NotFound/>} */}
      <div>
        <div>{item.cadastralNumber}</div>
        <div> {item.name}</div>
        <div>{item.typeCave}</div>
        <div>{item.lengthCave}</div>
        <div>{item.address}</div>
        <div>{item.numberRegion}</div>
        <div>{item.square}</div>
        <div>{item.volume}</div>
        <div>{item.amplitude}</div>
        <div>{item.coordinateX}</div>
        <div>{item.coordinateY}</div>
        <div>{item.typeRock}</div>
        <div>{item.depthCave}</div>
        <div>{item.createdAt}</div>

        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
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
    getOne: _id => dispatch(FetchIfNeeded(_id)),
    getPhotoCave: _id => dispatch(getPhotos(_id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneCave);
