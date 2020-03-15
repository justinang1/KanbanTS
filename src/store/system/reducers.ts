import { UPDATE_SESSION, SystemState, SystemActionTypes } from "./types";

const initialState: SystemState = {
  loggedIn: false,
  session: "testttt",
  userName: "wao"
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
