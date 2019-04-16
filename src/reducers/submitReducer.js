import {
  CREATE_ROOM, POST_MESSAGE
} from "../actions/types";

const initialState = {
  roomCreationSuccess: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ROOM:
      return {
        ...state,
        roomCreationSuccess: action.success,
      };
    
      case POST_MESSAGE:
      return {
        ...state,
        postMessageSuccess: action.success,
      };
    default:
      return state;
  }
}