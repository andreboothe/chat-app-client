import {
  ASSIGN_USER,
  ASSIGN_ROOM_ID
} from "./types";

export const assignUser = user => dispatch => {
  return dispatch({
    type: ASSIGN_USER,
    user
  });
}

export const assignRoomId = roomId => dispatch => {
  return dispatch({
    type: ASSIGN_ROOM_ID,
    roomId
  });
}