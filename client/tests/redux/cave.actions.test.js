import {
  getAllCaves,
  deleteCave,
  updateCave,
  setCave,
  errorHandler,
  fetchPostsIfNeeded
} from "../../src/redux/actions/allCave.actions";
import { allCaveConstants } from "../../src/redux/actions/allCave.actions";
import { userConstants } from "../../src/redux/actions/user.actions";
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
      fetch.mockResponse(JSON.stringify({ cave: { _id: 1 } }));
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
      const cave = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ cave: { _id: 1 } }));
      const expectedActions = [
        {
          type: allCaveConstants.CREATE_CAVE_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(setCave(cave)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("update cave", () => {
      const cave = { _id: 1 };
      fetch.mockResponse(JSON.stringify({ cave: { _id: 1 } }));
      const expectedActions = [
        {
          type: allCaveConstants.UPDATE_CAVE_SUCCESS,
          item: { _id: 1 }
        }
      ];
      const store = mockStore({ user: { token: "12345" } });
      return store.dispatch(updateCave(cave._id, cave)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it("handleError", () => {
      const e = { status: 401, statusText: "Unauthorized" };
      fetch.mockReject({ statusText: e.statusText, status: 401 });
      const expectedActions = [
        {
          type: allCaveConstants.ALL_CAVE_FAILURE,
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
          type: allCaveConstants.ALL_CAVE_FAILURE,
          error: { statusText: "Bad Request", status: 400 }
        }
      ];
      const store = mockStore({});
      store.dispatch(errorHandler(e));
      expect(store.getActions()).toEqual(expectedActions);
    });
    it("fetchIsNeeded", () => {
      fetch.mockResponse(JSON.stringify({cave: [1,2,3]}));
      const expectedActions = [
        {
          type: allCaveConstants.ALL_CAVE_REQUEST
        },
        {
          type: allCaveConstants.ALL_CAVE_SUCCESS,
          items: [1,2,3]
        }
      ];
      const store = mockStore({caves:{items:[1,2,3]}});
      store.dispatch(fetchPostsIfNeeded());
      expect(store.getActions()).toEqual(expectedActions);
      
    });
    it("fetchIsNeeded 2", () => {
      fetch.mockResponse(JSON.stringify({cave: [1,2,3]}));
      const expectedActions = [
        {
          type: allCaveConstants.ALL_CAVE_REQUEST
        },
        {
          type: allCaveConstants.ALL_CAVE_SUCCESS,
          items: [1,2,3]
        }
      ];
      const store = mockStore({caves:{items:[1,2,3], isFetching:false}});
      store.dispatch(fetchPostsIfNeeded())
        expect(store.getActions()).toEqual(expectedActions);
      
    });
  });
});
