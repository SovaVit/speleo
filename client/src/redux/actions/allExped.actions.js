import { expeditionService } from "../../utilities/api/expedition.service";
import { userConstants } from "./user.actions";
export const allExpeditionConstants = {
  ALL_EXPEDITIONS_REQUEST: "ALL_EXPEDITIONS_REQUEST",
  ALL_EXPEDITIONS_SUCCESS: "ALL_EXPEDITIONS_SUCCESS",
  ALL_EXPEDITIONS_FAILURE: "ALL_EXPEDITIONS_FAILURE",
  DELETE_EXPEDITIONS_SUCCESS: "DELETE_EXPEDITIONS_SUCCESS",
  CREATE_EXPEDITIONS_SUCCESS: "CREATE_EXPEDITIONS_SUCCESS",
  UPDATE_EXPEDITIONS_SUCCESS: "UPDATE_EXPEDITIONS_SUCCESS"
};

export function getAllExpeditions() {
  return dispatch => {
    dispatch(request());

    return expeditionService.getAll().then(
      items => {
        dispatch(allSuccess(items.expedition));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
export function deleteExpedition(id) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return expeditionService.deleteExpedition(id, token).then(
      item => {
        dispatch(deleteSuccess(item.expedition));
      },
      error => {
        dispatch(errorHandler(error));
      }
    );
  };
}
export function setExpedition(expedition) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return expeditionService.create(expedition, token).then(
      item => {
        dispatch(createSuccess(item.expedition));
      },
      error => {
       dispatch(errorHandler(error));
      }
    );
  };
}
export function updateExpedition(id, expedition) {
  return (dispatch, getState) => {
    const token = getState().user.token;

    return expeditionService.update(id, expedition, token).then(
      item => {
        dispatch(updateSuccess(item.expedition));
      },
      error => {
       dispatch(errorHandler(error));
      }
    );
  };
}
function request() {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_REQUEST };
}
function allSuccess(items) {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_SUCCESS, items };
}
function failure(error) {
  return { type: allExpeditionConstants.ALL_EXPEDITIONS_FAILURE, error };
}
function deleteSuccess(item) {
  return { type: allExpeditionConstants.DELETE_EXPEDITIONS_SUCCESS, item };
}
function createSuccess(item) {
  return {
    type: allExpeditionConstants.CREATE_EXPEDITIONS_SUCCESS,
    item
  };
}
function updateSuccess(item) {
  return {
    type: allExpeditionConstants.UPDATE_EXPEDITIONS_SUCCESS,
    item
  };
}
export function errorHandler(error) {
  return dispatch => {
    if (error.status === 401) {
      return (dispatch(failure(error)), dispatch({ type: userConstants.LOGOUT }));
    }
    return dispatch(failure(error));
  };
};
function shouldFetchPosts(state) {
  const { items, isFetching } = state.expeditions;
  if (items.length === 136) {
    return false;
  } else if (isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    shouldFetchPosts(getState()) ? dispatch(getAllExpeditions()) : Promise.resolve();
  };
}
