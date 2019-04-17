import { userConstants } from "../src/redux/actions/user.actions";
import { authentication } from "../src/redux/reducers/authentication.reducer";

const initialState = { isLogged: false, token: "" };

describe("AuthReducer", () => {
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
      user: { token: "token" }
    };
    expect(authentication(initialState, action)).toEqual({
      ...initialState,
      isLogged: true,
      token: action.user.token,
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
