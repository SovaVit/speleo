import React from "react";
import { connect } from "react-redux";
import Loader from "./dropzone";
import Gallery from "./gallery";
import { setPhoto, getPhotos, deletePhoto } from "../../redux/actions/photo.actions";
import * as css from './photo.module.css';

class PhotoGallery extends React.Component {

  componentDidMount(){
    this.props.getPhotos(this.props.match.params.id)
  }
  onDrop = acceptedFiles => {
    const data = new FormData();
    data.append("file", acceptedFiles[0]);
    data.append("caveId", this.props.match.params.id);
    this.props.setPhoto(data);
  };
  handleDelete = id =>{
    this.props.deletePhoto(id);
  };

  render() {
    return (
      <div className={css.container}>
       <div className={css.alert}>
        Фотогалерея!
      </div>
        <Gallery items={this.props.photo.items}
        handleDelete={this.handleDelete}/>
        <Loader onDrop={this.onDrop} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    photo: store.photo
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setPhoto: photo => dispatch(setPhoto(photo)),
    getPhotos: id => dispatch(getPhotos(id)),
    deletePhoto: id=> dispatch(deletePhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGallery);
