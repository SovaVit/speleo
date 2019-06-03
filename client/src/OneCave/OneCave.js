import React from "react";

const OneCave = props => {
  const { item, photo } = props;
  console.log(photo);
  return (
    <>
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
    </>
  );
};
export default OneCave;
