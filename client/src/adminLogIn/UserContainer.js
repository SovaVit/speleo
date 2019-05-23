import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { User } from "./user";
import { bindActionCreators } from "redux";
import { userActions } from "../Redux/actions/user.actions";

const UserContainer = props => {
  const {isLogged, error} =props.user;
  const handleSubmit = event => {
    props.actions.login(event.username, event.password);
  };

  return (
    <>
      {isLogged === false ? (
        <User handleSubmit={handleSubmit} Error={error} />
      ) : (
        <Redirect to="/admin" />
      )}
    </>
  );
};
const mapStateToProps = store => {
  return {
    user: store.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserContainer)
);
