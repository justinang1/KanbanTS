import { Message, PUSH_MESSAGE, SystemMessageType } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): SystemMessageType {
  return {
    type: PUSH_MESSAGE,
    payload: newMessage
  }
}