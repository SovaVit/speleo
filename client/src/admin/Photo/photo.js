import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "./dropzone";
import Gallery from "./gallery";
import {
  setPhoto,
  getPhotos,
  deletePhoto
} from "../../Redux/actions/photo.actions";
import * as css from "./photo.module.css";

const PhotoGallery = props => {
  const { id } = props.match.params;
  const { items } = props.photo;
  useEffect(() => {
    props.getPhotos(id);
  }, []);

  const onDrop = async acceptedFiles => {
    const data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("caveId", id);
    await props.setPhoto(data);
  };
  const handleDelete = id => {
    props.deletePhoto(id);
  };

  return (
    <div className={css.container}>
      <div className={css.alert}>Фотогалерея!</div>
      <Gallery items={items} handleDelete={handleDelete} />
      <Loader onDrop={onDrop} />
    </div>
  );
};

const mapStateToProps = store => {
  return {
    photo: store.photo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setPhoto: photo => dispatch(setPhoto(photo)),
    getPhotos: id => dispatch(getPhotos(id)),
    deletePhoto: id => dispatch(deletePhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGallery);
