import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import application from './application'
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    application,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
