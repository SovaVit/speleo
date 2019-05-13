import { getOneCave } from "../src/redux/actions/oneCave.actions";
import { oneCaveConstants } from "../src/redux/actions/oneCave.actions";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getOne", () => {
    const _id =1; 
  afterEach(() => {
    fetch.resetMocks();
  });
  it(" GET_ONE_SUCCESS cave", () => {
    fetch.mockResponse(JSON.stringify({ 1: 1 } ));
    const expectedActions = [
      {
        type: oneCaveConstants.ONE_CAVE_REQUEST
      },
      {
        type: oneCaveConstants.ONE_CAVE_SUCCESS,
        item: { 1: 1 }
      }
    ];
    const store = mockStore({});
    return store.dispatch(getOneCave(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it(" ERROR_ONE cave", () => {
    const e = new Error("Unauthorized");
    e.name = "Unauthorized";
    fetch.mockReject({ statusText: e.name, status: 401 });

    const expectedActions = [
      {
        type: oneCaveConstants.ONE_CAVE_REQUEST
      },
      {
        type: oneCaveConstants.ONE_CAVE_FAILURE,
        error: { statusText: "Unauthorized", status: 401 }
      }
    ];
    const store = mockStore({});
    return store.dispatch(getOneCave(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
