import React from "react";
import { withRouter } from "react-router";
import { Alert } from "reactstrap";
import NavBar from "../NavBar/Nav";

const NotFound = ({ location }) => (
  <>
    <NavBar />
    <h1 className="text-muted">Error 404</h1>
    <Alert color="danger">
      Sorry, page{" "}
      <p className="text-muted">
        <strong>{location.pathname}</strong>
      </p>{" "}
      was not found!
    </Alert>
  </>
);

export default withRouter(NotFound);
