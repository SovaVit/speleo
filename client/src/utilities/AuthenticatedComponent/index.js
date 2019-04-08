import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export default function requireAuth(Component) {
  class PrivateRoute extends React.Component {
    render() {
      return (
        <div>
          {this.props.user.isLogged === true ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return connect(mapStateToProps)(PrivateRoute);
}
