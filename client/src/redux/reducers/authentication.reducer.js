import { userConstants } from "../actions/user.actions";

const initialState = { isLogged: false, token: "", exp: null, error: null };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        error: null
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: action.user.token,
        exp: action.user.exp
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        status: action.error.status,
        error: action.error.statusText
      };
    case userConstants.LOGOUT:
      return {
        isLogged: false,
        token: "",
        exp: null,
        error: null
      };
    default:
      return state;
  }
}
