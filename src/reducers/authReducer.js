import {
  ASSIGN_USER,
  ASSIGN_ROOM_ID
} from "../actions/types";

const initialState = {
  user: null,
  roomId: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ASSIGN_USER:
      return {
        ...state,
        user: action.user,
      };
      case ASSIGN_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    default:
      return state;
  }
}