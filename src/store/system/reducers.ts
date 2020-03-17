import { PUSH_TODO_MESSAGE, PUSH_INDEV_MESSAGE, PUSH_DONE_MESSAGE } from './types'
import { ADV_TODO_MESSAGE, ADV_INDEV_MESSAGE, PREV_DONE_MESSAGE, PREV_INDEV_MESSAGE } from './types';
import { SystemState, GenericPushType, GenericShiftType, Message } from "./types";

const initialState: SystemState = {
  todo_messages: [],
  in_dev_messages: [{text: 'Implement Task Creation'} as Message, {text: 'Implement Redux Store'} as Message],
  done_messages: [{text: 'Implement Header Colors'} as Message]
};

export function systemReducer(
  state = initialState,
  action: GenericPushType | GenericShiftType
): SystemState {
  switch (action.type) {
    // Message Creation Handlers
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
    
    // Message Forward Movement
    case ADV_TODO_MESSAGE: {
      let extractedMsg = state.todo_messages[action.payload.id]
      return {
        ...state,
        todo_messages: [...state.todo_messages.slice(0, action.payload.id), ...state.todo_messages.slice(action.payload.id + 1)],
        in_dev_messages: [extractedMsg, ...state.in_dev_messages]
      }
    }
    case ADV_INDEV_MESSAGE: {
      let extractedMsg = state.in_dev_messages[action.payload.id]
      return {
        ...state,
        in_dev_messages: [...state.in_dev_messages.slice(0, action.payload.id), ...state.in_dev_messages.slice(action.payload.id + 1)],
        done_messages: [extractedMsg, ...state.done_messages]
      }
    }

    // Message Backwards Movement
    case PREV_DONE_MESSAGE: {
      // console.log(state.todo_messages[action.payload.id]);
      let extractedMsg = state.done_messages[action.payload.id]
      return {
        ...state,
        done_messages: [...state.done_messages.slice(0, action.payload.id), ...state.done_messages.slice(action.payload.id + 1)],
        in_dev_messages: [extractedMsg, ...state.in_dev_messages]
      }
    }
    case PREV_INDEV_MESSAGE: {
      let extractedMsg = state.in_dev_messages[action.payload.id]
      return {
        ...state,
        in_dev_messages: [...state.in_dev_messages.slice(0, action.payload.id), ...state.in_dev_messages.slice(action.payload.id + 1)],
        todo_messages: [extractedMsg, ...state.todo_messages]
      }
    }
    default:
      return state;
  }
}
