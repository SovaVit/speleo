import React from "react";
import Item from "./Item";
import * as css from './photo.module.css';

const Gallery = props => {
  const items = props.items;
  const Gallery = items.map(item => (
    <Item
      key={item._id}
      path={item.photoPath}
      id={item._id}
      handleDelete={props.handleDelete}
    />
  ));

  return <div className={css.gallery}>{Gallery}</div>;
};
export default Gallery;
