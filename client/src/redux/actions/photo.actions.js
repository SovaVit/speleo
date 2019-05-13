import { photoService } from "../../utilities/api/photo.service";
import { userConstants } from "./user.actions";

export const photoConstants = {
  PHOTO_REQUEST: "PHOTO_REQUEST",
  PHOTO_SUCCESS: "PHOTO_SUCCESS",
  PHOTO_FAILURE: "PHOTO_FAILURE",
  DELETE_PHOTO_SUCCESS: "DELETE_PHOTO_SUCCESS",
  CREATE_PHOTO_SUCCESS: "CREATE_PHOTO_SUCCESS"
};

function request() {
  return { type: photoConstants.PHOTO_REQUEST };
}
function allSuccess(items) {
  return { type: photoConstants.PHOTO_SUCCESS, items };
}
function failure(error) {
  return { type: photoConstants.PHOTO_FAILURE, error };
}

function deleteSuccess(item) {
  return { type: photoConstants.DELETE_PHOTO_SUCCESS, item };
}
function createSuccess(item) {
  return {
    type: photoConstants.CREATE_PHOTO_SUCCESS,
    item
  };
}

function errorHandler(dispatch, error) {
  if (error.status === 401) {
    dispatch({ type: userConstants.LOGOUT });
  }
  dispatch(failure(error));
}
export function getPhotos(id) {
  return dispatch => {
    dispatch(request());

    return photoService.getAll(id).then(
      items => {
        dispatch(allSuccess(items.photo));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };
}
export function deletePhoto(id) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return photoService.deletePhoto(id, token).then(
      item => {
        dispatch(deleteSuccess(item.photo));
      },
      error => {
        errorHandler(dispatch, error);
      }
    );
  };
}
export function setPhoto(photo) {
  return (dispatch, getState) => {
    const token = getState().user.token;
    return photoService.create(photo, token).then(
      item => {
        dispatch(createSuccess(item.photo));
      },
      error => {
        errorHandler(dispatch, error);
      }
    );
  };
}
