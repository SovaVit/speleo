import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { User } from "./user";
import { bindActionCreators } from "redux";
import { userActions } from "../Redux/actions/user.actions";

const UserContainer = props => {
  const { error } = props.user;
  const handleSubmit = async event => {
    await props.actions.login(event.username, event.password);
   return props.history.push("/admin/cave");
  };

  return (
    
      <User handleSubmit={handleSubmit} Error={error} />
  
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
