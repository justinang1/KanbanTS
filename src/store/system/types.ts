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
export const PUSH_INDEV_MESSAGE = 'PUSH_INDEV_MESSAGE';
export const PUSH_DONE_MESSAGE = 'PUSH_DONE_MESSAGE';

interface PushTodoMessage {
  type: typeof PUSH_TODO_MESSAGE;
  payload: Message;
}

interface PushInDevMessage {
  type: typeof PUSH_INDEV_MESSAGE;
  payload: Message;
}

interface PushDoneMessage {
  type: typeof PUSH_DONE_MESSAGE;
  payload: Message;
}

export type GenericPushType = PushTodoMessage | PushInDevMessage | PushDoneMessage;