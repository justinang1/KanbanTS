// Describing the shape of the system's slice of state
export interface SystemState {
  todo_messages: Message[];
  in_dev_messages: Message[];
  done_messages: Message[];
}

export interface Message {
  text: string;
}

export interface MessageExtract {
  id: number;
}

// Describing the different ACTION NAMES available
export const PUSH_TODO_MESSAGE = 'PUSH_TODO_MESSAGE';
export const PUSH_INDEV_MESSAGE = 'PUSH_INDEV_MESSAGE';
export const PUSH_DONE_MESSAGE = 'PUSH_DONE_MESSAGE';

export const ADV_TODO_MESSAGE = 'ADV_TODO_MESSAGE';
export const ADV_INDEV_MESSAGE = 'ADV_INDEV_MESSAGE';

export const PREV_DONE_MESSAGE = 'PREV_DONE_MESSAGE';
export const PREV_INDEV_MESSAGE = 'PREV_INDEV_MESSAGE';

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

interface PushTodoMessage {
  type: typeof PUSH_TODO_MESSAGE;
  payload: Message;
}

interface AdvTodoMessage {
  type: typeof ADV_TODO_MESSAGE;
  payload: MessageExtract;
}

interface AdvInDevMessage {
  type: typeof ADV_INDEV_MESSAGE;
  payload: MessageExtract;
}

interface PrevDoneMessage {
  type: typeof PREV_DONE_MESSAGE;
  payload: MessageExtract;
}

interface PrevInDevMessage {
  type: typeof PREV_INDEV_MESSAGE;
  payload: MessageExtract;
}

export type GenericPushType = PushTodoMessage | PushInDevMessage | PushDoneMessage;

export type GenericShiftType = AdvTodoMessage | AdvInDevMessage | PrevDoneMessage | PrevInDevMessage;