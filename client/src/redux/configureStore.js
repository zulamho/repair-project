import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import application from './features/application'
import users from "./features/users";
import service from "./features/service";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    application, service,users
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
