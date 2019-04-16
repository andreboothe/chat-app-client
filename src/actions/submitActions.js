import {
  POST_MESSAGE,
  CREATE_ROOM
} from "./types";

export const sendMessage = (user, roomId, text) => dispatch => {
  
  return user.sendMessage({
    text,
    roomId: roomId
  }).then(result => {
      if (!result.statusCode){
        dispatch({
          type: POST_MESSAGE,
          success: true
        })
      } else {
        dispatch({
          type: POST_MESSAGE,
          success: false
        })
      }
    }
  );
}

export const createRoom = (user, name) => dispatch =>  {
  return user.createRoom({
    type:  CREATE_ROOM,
    name
  }).then(result => {
    if (!result.statusCode){
      dispatch({
        type: CREATE_ROOM,
        success: true
      })
    } else {
      dispatch({
        type: CREATE_ROOM,
        success: false
      })
    }
  });
}