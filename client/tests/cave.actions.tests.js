import {
  getAllCaves,
  deleteCave,
  updateCave,
  setCave
} from "../src/redux/actions/allCave.actions";
import { allCaveConstants } from "../src/redux/actions/allCave.actions";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("caves actions", () => {
  describe("getAll", () => {
    afterEach(() => {
      fetch.resetMocks();
    });
    it(" GET_ALL_SUCCESS caves", () => {
      fetch.mockResponse(JSON.stringify({ cave: [1, 2, 3] }));
      const expectedActions = [
        {
          type: allCaveConstants.ALL_CAVE_REQUEST
        },
        {
          type: allCaveConstants.ALL_CAVE_SUCCESS,
          items: [1, 2, 3]
        }
      ];
      const store = mockStore({});
      return store.dispatch(getAllCaves()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it(" ERROR_ALL caves", () => {
      const e = new Error("Unauthorized");
      e.name = "Unauthorized";
      fetch.mockReject({ statusText: e.name, status: 401 });

      const expectedActions = [
        {
          type: allCaveConstants.ALL_CAVE_REQUEST
        },
        {
          type: allCaveConstants.ALL_CAVE_FAILURE,
          error: { statusText: "Unauthorized", status: 401 }
        }
      ];
      const store = mockStore({});
      return store.dispatch(getAllCaves()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("delete cave", () => {
      const _id = 1;
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allCaveConstants.DELETE_CAVE_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(deleteCave(_id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("create cave", () => {
      const expedition = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allCaveConstants.CREATE_CAVE_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(setCave(expedition)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("update cave", () => {
      const expedition = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allCaveConstants.UPDATE_CAVE_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(updateCave(expedition._id, expedition)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
