import React from "react";
import { withRouter } from "react-router";
import css from "./NotFound.module.css";
import NavBar from "../NavBar/Nav";

const NotFound = ({ location }) => (
  <div className={css.styles}>
    <NavBar />
    <h1>Error 404</h1>
    <div>
      Sorry, page{" "}
      <p>
        <strong>{location.pathname}</strong>
      </p>{" "}
      was not found!
    </div>
  </div>
);

export default withRouter(NotFound);
