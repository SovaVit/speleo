import {
   getPhotos,
   setPhoto,
   deletePhoto
  } from "../../src/redux/actions/photo.actions";
  import { photoConstants } from "../../src/redux/actions/photo.actions";
  import configureMockStore from "redux-mock-store";
  
  import thunk from "redux-thunk";
  
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  
  describe("photo actions", () => {
    describe("getAll by caveId", () => {
      afterEach(() => {
        fetch.resetMocks();
      });
      it(" GET_ALL_SUCCESS photo", () => {
        fetch.mockResponse(JSON.stringify({ photo: [1, 2, 3] }));
        const expectedActions = [
          {
            type: photoConstants.PHOTO_REQUEST
          },
          {
            type: photoConstants.PHOTO_SUCCESS,
            items: [1, 2, 3]
          }
        ];
        const store = mockStore({});
        return store.dispatch(getPhotos()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
      it(" ERROR_ALL photo", () => {
        const e = new Error("Unauthorized");
        e.name = "Unauthorized";
        fetch.mockReject({ statusText: e.name, status: 401 });
  
        const expectedActions = [
          {
            type: photoConstants.PHOTO_REQUEST
          },
          {
            type: photoConstants.PHOTO_FAILURE,
            error: { statusText: "Unauthorized", status: 401 }
          }
        ];
        const store = mockStore({});
        return store.dispatch(getPhotos()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
      it("delete photo", () => {
        const _id = 1;
        fetch.mockResponse(JSON.stringify({ photo: { _id: 1 } }));
        const expectedActions = [
          {
            type: photoConstants.DELETE_PHOTO_SUCCESS,
            item: { _id: 1 }
          }
        ];
        const store = mockStore({ user: { token: "12345" } });
        return store.dispatch(deletePhoto(_id)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
      it("create photo", () => {
        const photo = { _id: 1 };
        fetch.mockResponse(JSON.stringify({ photo: { _id: 1 } }));
        const expectedActions = [
          {
            type: photoConstants.CREATE_PHOTO_SUCCESS,
            item: { _id: 1 }
          }
        ];
        const store = mockStore({ user: { token: "12345" } });
        return store.dispatch(setPhoto(photo)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

    });
  });
  