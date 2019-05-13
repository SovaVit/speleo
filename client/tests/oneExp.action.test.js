import { getOneExpedition } from "../src/redux/actions/oneExped.actions";
import { oneExpeditionConstants } from "../src/redux/actions/oneExped.actions";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getOne", () => {
  const _id = 1;
  afterEach(() => {
    fetch.resetMocks();
  });
  it(" GET_ONE_SUCCESS expedition", () => {
    fetch.mockResponse(JSON.stringify({ expedition: { 1: 1 } }));
    const expectedActions = [
      {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_REQUEST
      },
      {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_SUCCESS,
        item: { 1: 1 }
      }
    ];
    const store = mockStore({});
    return store.dispatch(getOneExpedition(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it(" ERROR_ONE expedition", () => {
    const e = new Error("Unauthorized");
    e.name = "Unauthorized";
    fetch.mockReject({ statusText: e.name, status: 401 });

    const expectedActions = [
      {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_REQUEST
      },
      {
        type: oneExpeditionConstants.ONE_EXPEDITIONS_FAILURE,
        error: { statusText: "Unauthorized", status: 401 }
      }
    ];
    const store = mockStore({});
    return store.dispatch(getOneExpedition(_id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
