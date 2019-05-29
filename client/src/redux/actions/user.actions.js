import { userService } from "../../utilities/api/user.service";

export const userConstants = {
  LOGIN_REQUEST: "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS: "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE: "USERS_LOGIN_FAILURE",

  LOGOUT: "USERS_LOGOUT"
};

export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    dispatch(request());

    return userService.login(username, password).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout(token) {
  return dispatch => {
    return dispatch({ type: userConstants.LOGOUT });
  };
}
