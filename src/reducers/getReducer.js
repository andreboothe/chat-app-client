import {
  GET_ALL_ROOMS,
  ROOM_SUBSCRIPTION
  
} from "../actions/types";

const initialState = {
  joinableRooms: [],
  joinedRooms: [],
  messageList:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return {
        ...state,
        joinedRooms: action.joinedRooms,
        joinableRooms: action.joinableRooms
      };
      case ROOM_SUBSCRIPTION:
        return {
          ...state,
          messageList: action.messageList
        };
    default:
      return state;
  }
}
