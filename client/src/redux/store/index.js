import { applyMiddleware, configureStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducer";

const store = configureStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
