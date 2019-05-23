import { userConstants } from "../../src/redux/actions/user.actions";
import { authentication } from "../../src/redux/reducers/authentication.reducer";

const initialState = { isLogged: false, token: "", exp: null, error: null };

describe("AuthReducer", () => {
  it("should return the initial state", () => {
    expect(authentication(undefined, {})).toEqual({
      isLogged: false,
      token: "",
      exp: null,
      error: null
    });
  });
  it("request", () => {
    const action = {
      type: userConstants.LOGIN_REQUEST
    };
    expect(authentication(initialState, action)).toEqual({
      ...initialState,
      isLogged: false,
      error: null
    });
  });
  it("success", () => {
    const action = {
      type: userConstants.LOGIN_SUCCESS,
      user: { token: "token", exp: "123" }
    };
    expect(authentication(initialState, action)).toEqual({
      ...initialState,
      exp: "123",
      isLogged: true,
      token: action.user.token,
      error: null
    });
  });
  it("LOG_out success", () => {
    const action = {
      type: userConstants.LOGOUT,
      user: { token: "token", exp: "123" }
    };
    expect(authentication(initialState, action)).toEqual({
      ...initialState,
      
        isLogged: false,
        exp: null,
        token: "",
        error: null
      
    });
  });
  it("failure", () => {
    const action = {
      type: userConstants.LOGIN_FAILURE,
      error: { status: 401, statusText: "Unauthorized" }
    };
    expect(authentication(initialState, action)).toEqual({
      ...initialState,
      isLogged: false,
      status: action.error.status,
      error: action.error.statusText
    });
  });
});
