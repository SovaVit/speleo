import {
  getAllExpeditions,
  deleteExpedition,
  setExpedition,
  updateExpedition,
  errorHandler,
  fetchPostsIfNeeded
} from "../../src/redux/actions/allExped.actions";
import { allExpeditionConstants } from "../../src/redux/actions/allExped.actions";
import { userConstants } from "../../src/Redux/actions/user.actions";
import configureMockStore from "redux-mock-store";

import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("expeditions actions", () => {
  describe("getAll", () => {
    afterEach(() => {
      fetch.resetMocks();
    });
    it(" GET_ALL_SUCCESS when fetching", () => {
      fetch.mockResponse(JSON.stringify({ expedition: [1, 2, 3] }));
      const expectedActions = [
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST
        },
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS,
          items: [1, 2, 3]
        }
      ];
      const store = mockStore({});
      return store.dispatch(getAllExpeditions()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it(" ERROR_ALL when fetching", () => {
      const e = new Error("Unauthorized");
      e.name = "Unauthorized";
      fetch.mockReject({ statusText: e.name, status: 401 });

      const expectedActions = [
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST
        },
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE,
          error: { statusText: "Unauthorized", status: 401 }
        }
      ];
      const store = mockStore({});
      return store.dispatch(getAllExpeditions()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("delete expedition", () => {
      const _id = 1;
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(deleteExpedition(_id)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("create expedition", () => {
      const expedition = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(setExpedition(expedition)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("update expedition", () => {
      const expedition = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ expedition: { _id: 1 } }));
      const expectedActions = [
        {
          type: allExpeditionConstants.UPDATE_EXPEDITIONS_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store
        .dispatch(updateExpedition(expedition._id, expedition))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it("handleError", () => {
      const e = { status: 401, statusText: "Unauthorized" };
      fetch.mockReject({ statusText: e.statusText, status: 401 });
      const expectedActions = [
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE,
          error: { statusText: "Unauthorized", status: 401 }
        },
        {
          type: userConstants.LOGOUT
        }
      ];
      const store = mockStore({});
      store.dispatch(errorHandler(e));
      expect(store.getActions()).toEqual(expectedActions);
    });
    it("handleError 2", () => {
      const e = { status: 400, statusText: "Bad Request" };
      fetch.mockReject({ statusText: "Bad Request", status: 400 });
      const expectedActions = [
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE,
          error: { statusText: "Bad Request", status: 400 }
        }
      ];
      const store = mockStore({});
      store.dispatch(errorHandler(e));
      expect(store.getActions()).toEqual(expectedActions);
    });
    it("fetchIsNeeded", () => {
      fetch.mockResponse(JSON.stringify({ expedition: [1, 2, 3] }));
      const expectedActions = [
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST
        },
        {
          type: allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS,
          items: [1, 2, 3]
        }
      ];
      const store = mockStore({ expeditions: { items: [1, 2, 3] } });
      return store
        .dispatch(fetchPostsIfNeeded())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
    it("fetchIsNeeded 2", () => {
      fetch.mockResponse(JSON.stringify({ expedition: [1, 2, 3] }));
      const expectedActions = [];
      const store = mockStore({
        expeditions: { items: [1, 2, 3], isFetching: true }
      });
      return store
        .dispatch(fetchPostsIfNeeded())
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });
});
