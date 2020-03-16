// Describing the shape of the system's slice of state
export interface SystemState {
  messages: {text: string, id: number}[];
}

export interface Message {
  text: string;
  id: number;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = 'UPDATE_SESSION';
export const PUSH_MESSAGE = 'PUSH_MESSAGE';

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

interface PushMessageAction {
  type: typeof PUSH_MESSAGE;
  payload: Message;
}

export type SystemActionTypes = UpdateSessionAction;
export type SystemMessageType = PushMessageAction;
