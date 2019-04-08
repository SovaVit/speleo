import { userConstants } from "../actions/user.actions";

const initialState = { isLogged: false, token: "" };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        isLogged: false,
        token: action.user.token, 
        error: null
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        isLogged: true,
        token: action.user.token,
        error: null
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isLogged: false,
        status: action.error.status,
        error: action.error.statusText
        
      };
    case userConstants.LOGOUT:
      return {
        isLogged: false
      };
    default:
      return state;
  }
}
