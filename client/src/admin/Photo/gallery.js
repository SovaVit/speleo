import React from "react";
import Item from './Item';


const Gallery = (props) => {
const items = props.items;
const Gallery = items.map(item=>(<Item key={item._id} path={item.photoPath}/>))

return <div>{Gallery}</div>;}
export default Gallery;
