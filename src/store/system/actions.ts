import { Message, PUSH_TODO_MESSAGE, SystemMessageType } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendTODOMessage(newMessage: Message): SystemMessageType {
  return {
    type: PUSH_TODO_MESSAGE,
    payload: newMessage
  }
}