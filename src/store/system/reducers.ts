import { PUSH_TODO_MESSAGE, SystemState, SystemMessageType, Message } from "./types";

const initialState: SystemState = {
  todo_messages: [],
  in_dev_messages: [{text: 'Implement Task Creation'} as Message, {text: 'Implement Redux Store'} as Message],
  done_messages: [{text: 'Implement Header Colors'} as Message]
};

export function systemReducer(
  state = initialState,
  action: SystemMessageType
): SystemState {
  switch (action.type) {
    case PUSH_TODO_MESSAGE: {
      return {
        ...state, 
        todo_messages: [...state.todo_messages, action.payload]
      };
    }
    default:
      return state;
  }
}
