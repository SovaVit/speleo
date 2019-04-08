import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { User } from "./user";
import { bindActionCreators } from "redux";
import { userActions } from "../redux/actions/user.actions";

const UserContainer = props => {
  const handleSubmit = event => {
    props.actions.login(event.username, event.password);
  };

  return (
    <div>
      {props.user.isLogged === false ? (
        <User handleSubmit={handleSubmit} Error={props.user.error} />
      ) : (
        <Redirect to="/admin" />
      )}
    </div>
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
