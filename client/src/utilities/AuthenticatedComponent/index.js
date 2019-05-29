import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export default function requireAuth(Component) {
  class PrivateRoute extends React.Component {
    Timer = () => {
      const { exp } = this.props.user;
      const expirationTime = (exp - Date.now()) / 1000;

      return expirationTime <= 0 ? false : true;
    };

    render() {
      const { isLogged } = this.props.user;
      return (
        <>
          {isLogged === true && this.Timer() === true ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )}
        </>
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
