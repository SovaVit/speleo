/* eslint-disable no-unused-expressions */
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

export function getAllCaves(start) {
  return dispatch => {
    dispatch(request());

    return caveService.getAll(start).then(
      items => {
        dispatch(allSuccess(items.cave, items.countRecords));
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
        dispatch(errorHandler(error));
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
        dispatch(errorHandler(error));
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
        dispatch(errorHandler(error));
      }
    );
  };
}
function request() {
  return { type: allCaveConstants.ALL_CAVE_REQUEST };
}
function allSuccess(items, countRecords) {
  return { type: allCaveConstants.ALL_CAVE_SUCCESS, items, countRecords };
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
export function errorHandler(error) {
  return dispatch => {
    if (error.status === 401) {
      return( dispatch(failure(error)), dispatch({ type: userConstants.LOGOUT }));
    }
    return dispatch(failure(error));
  };
}
function shouldFetchPosts(state) {
  const { isFetching } = state.caves;
  const result = isFetching ? false : true;
  return result;
}

export function fetchPostsIfNeeded(start) {
  return (dispatch, getState) => {
    shouldFetchPosts(getState())
      ? dispatch(getAllCaves(start))
      : Promise.resolve();
  };
}
