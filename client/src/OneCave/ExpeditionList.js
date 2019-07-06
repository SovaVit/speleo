import React from "react";

const ExpeditionList = props => {
  const { items } = props;


  return (
    <div>
      {items &&
        items.map((item, index) => {
          return <div key={index}>{item.caveName}</div>;
        })}
    </div>
  );
};

export default ExpeditionList;
