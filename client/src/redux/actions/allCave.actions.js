import { caveService } from "../../utilities/api/cave.service";
import { userConstants } from "./user.actions";
export const allCaveConstants = {
  ALL_CAVE_REQUEST: "ALL_CAVE_REQUEST",
  ALL_CAVE_SUCCESS: "ALL_CAVE_SUCCESS",
  ALL_CAVE_FAILURE: "ALL_CAVE_FAILURE",
  DELETE_CAVE_SUCCESS: "DELETE_CAVE_SUCCESS",
  CREATE_CAVE_SUCCESS: "CREATE_CAVE_SUCCESS",
  UPDATE_CAVE_SUCCESS: "UPDATE_CAVE_SUCCESS"
};

 function getAllCaves() {
  return dispatch => {
    dispatch(request());

    return caveService.getAll().then(
      items => {
        dispatch(allSuccess(items.cave));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
export function deleteCave(id) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return caveService.deleteCave(id, token).then(
      item => {
        dispatch(deleteSuccess(item.cave));
      },
      error => {
        errorHandler(dispatch, error);
      }
    );
  };
}
export function setCave(cave) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return caveService.create(cave, token).then(
      item => {
        dispatch(createSuccess(item.cave));
      },
      error => {
        errorHandler(dispatch, error);
      }
    );
  };
}
export function updateCave(id, cave) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return caveService.update(id, cave, token).then(
      item => {
        dispatch(updateSuccess(item.cave));
      },
      error => {
        errorHandler(dispatch, error);
      }
    );
  };
}
function request() {
  return { type: allCaveConstants.ALL_CAVE_REQUEST };
}
function allSuccess(items) {
  return { type: allCaveConstants.ALL_CAVE_SUCCESS, items };
}
function failure(error) {
  return { type: allCaveConstants.ALL_CAVE_FAILURE, error };
}

function deleteSuccess(item) {
  return { type: allCaveConstants.DELETE_CAVE_SUCCESS, item };
}
function createSuccess(item) {
  return {
    type: allCaveConstants.CREATE_CAVE_SUCCESS,
    item
  };
}
function updateSuccess(item) {
  return {
    type: allCaveConstants.UPDATE_CAVE_SUCCESS,
    item
  };
}
function errorHandler(dispatch, error) {
  if (error.status === 401) {
    dispatch({ type: userConstants.LOGOUT });
  }
  dispatch(failure(error));
}
function shouldFetchPosts(state) {
  const {items, isFetching} = state.caves;
  if (!items) {
    return true
  } else if (isFetching) {
    return false
  } else {
    return true
  }
}

export function fetchPostsIfNeeded() {

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
  
      return dispatch(getAllCaves())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}