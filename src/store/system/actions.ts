import { Message, PUSH_TODO_MESSAGE, PUSH_INDEV_MESSAGE, PUSH_DONE_MESSAGE } from './types'
import { GenericPushType } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function createTODOMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_TODO_MESSAGE,
    payload: newMessage
  }
}

export function createInDevMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_INDEV_MESSAGE,
    payload: newMessage
  }
}

export function createDoneMessage(newMessage: Message): GenericPushType {
  return {
    type: PUSH_DONE_MESSAGE,
    payload: newMessage
  }
}