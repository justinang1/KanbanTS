// Describing the shape of the system's slice of state
export interface SystemState {
  todo_messages: Message[];
  in_dev_messages: Message[];
  done_messages: Message[];
}

export interface Message {
  text: string;
}

// Describing the different ACTION NAMES available
export const PUSH_TODO_MESSAGE = 'PUSH_TODO_MESSAGE';

interface PushMessageAction {
  type: typeof PUSH_TODO_MESSAGE;
  payload: Message;
}
export type SystemMessageType = PushMessageAction;
