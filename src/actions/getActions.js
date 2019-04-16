import {
  GET_ALL_ROOMS,
  ROOM_SUBSCRIPTION
} from "./types";

export const getAllRooms = user => dispatch => {
  return user.getJoinableRooms()
  .then(joinableRooms => {
      
      dispatch({
        type: GET_ALL_ROOMS,
        joinableRooms,
        joinedRooms: user.rooms
      });
  })
  .catch(err => console.log('error on joinableRooms: ', err))
}

export const roomSubscription = (user, roomId) => dispatch => {
  let messageList = [];
  dispatch({
    type: ROOM_SUBSCRIPTION,
    messageList: messageList
  });
  return user.subscribeToRoomMultipart({
    roomId: roomId,
    hooks: {
        onMessage: message => {
          messageList = [...messageList, message];
          dispatch({
            type: ROOM_SUBSCRIPTION,
            messageList: messageList
          })
        }
    }
  })
  .catch(err => console.log('error on subscribing to room: ', err))
}