import React from "react";
import { Button } from "reactstrap";
import * as css from "./photo.module.css";

const Item = props => {
  return (
    <div className={css.item}>
      {" "}
      <img src={props.path} alt="Cave" height="200" width="300" />
      <Button
        outline
        color="danger"
        onClick={() => props.handleDelete(props.id)}
      >
        Видалити
      </Button>{" "}
    </div>
  );
};
export default Item;
