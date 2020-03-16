import { PUSH_TODO_MESSAGE, PUSH_INDEV_MESSAGE, PUSH_DONE_MESSAGE } from './types'
import { SystemState, GenericPushType, Message } from "./types";

const initialState: SystemState = {
  todo_messages: [],
  in_dev_messages: [{text: 'Implement Task Creation'} as Message, {text: 'Implement Redux Store'} as Message],
  done_messages: [{text: 'Implement Header Colors'} as Message]
};

export function systemReducer(
  state = initialState,
  action: GenericPushType
): SystemState {
  switch (action.type) {
    case PUSH_TODO_MESSAGE: {
      return {
        ...state, 
        todo_messages: [action.payload, ...state.todo_messages]
      };
    }
    case PUSH_INDEV_MESSAGE: {
      return {
        ...state, 
        in_dev_messages: [action.payload, ...state.in_dev_messages]
      };
    }
    case PUSH_DONE_MESSAGE: {
      return {
        ...state, 
        done_messages: [action.payload, ...state.done_messages]
      };
    }
    default:
      return state;
  }
}
