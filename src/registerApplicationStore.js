import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function setupStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
