import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { systemReducer } from "./system/reducers";
import { saveState, loadState } from "./localStorage";

const rootReducer = combineReducers({
  system: systemReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const persistedState = loadState();

  console.log(middlewares)
  console.log(persistedState)

  const store = createStore(
    rootReducer,
    {system: persistedState},
    composeWithDevTools(middleWareEnhancer)
  );

  store.subscribe(() => {
    saveState(store.getState().system)
  })

  return store;
}
