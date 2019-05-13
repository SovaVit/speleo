import React from "react";
import { Button } from "reactstrap";

const Item = props => {
  return (
    <div>
      {" "}
      <img src={props.path} alt="Cave" height="250" width="250" />
      <Button outline color="danger">primary</Button>{" "}
    </div>
  );
};
export default Item;
