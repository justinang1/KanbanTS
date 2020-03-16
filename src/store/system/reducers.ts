import { PUSH_MESSAGE, SystemState, SystemMessageType } from "./types";

const initialState: SystemState = {
  messages: [{ text: 'Implement Redux Store', id: 1 }, 
             { text: 'Implement Task Creation', id: 1 }, 
             { text: 'Implement Header Colors', id: 2 }]
};

export function systemReducer(
  state = initialState,
  action: SystemMessageType
): SystemState {
  switch (action.type) {
    case PUSH_MESSAGE: {
      return {
        messages: [...state.messages, action.payload]
      };
    }
    default:
      return state;
  }
}
