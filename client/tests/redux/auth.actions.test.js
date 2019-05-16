import { userActions} from "../../src/redux/actions/user.actions";
import {userConstants} from "../../src/redux/actions/user.actions";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("user actions", () => {
it("login",()=>{
    const username = "1";
    const password = "2";
    fetch.mockResponse(JSON.stringify( {token: "12345"}));
    const expectedActions = 
      [{
        type: userConstants.LOGIN_REQUEST,
        
      },
    {
        type: userConstants.LOGIN_SUCCESS,
        user: {token: "12345"}
    }];
    const store = mockStore({});
    return store.dispatch(userActions.login(username, password)).then(()=>{
      expect(store.getActions()).toEqual(expectedActions)
    })
})
it(" ERROR_LOGIN", () => {
    const username = "1";
    const password = "2";
    fetch.mockReject({statusText: "Error", status: 401});

    const expectedActions = [
      {
        type: userConstants.LOGIN_REQUEST
      },
      {
        type: userConstants.LOGIN_FAILURE,
        error: {statusText:"Error", status: 401},
      }
    ];
    const store = mockStore({});
    return store.dispatch(userActions.login(username, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

})