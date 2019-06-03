import React from "react";

const OneExpedition = props => {
  const { item } = props;
  return (
    <>
      {" "}
      <div>{item.caveName}</div>
      <div>{item.dateExpedition}</div>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
      <div>{item.numberExpedition}</div>
    </>
  );
};
export default OneExpedition;
