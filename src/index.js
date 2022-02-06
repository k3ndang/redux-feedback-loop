import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Reducers
const feedback = (
  //creates object to be modified latter
  state = {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
  },
  action
) => {
  //switch statement that modifies the above object
  switch (action.type) {
    case "NEW_FEELING":
      return { ...state, feeling: (state.feeling = action.payload) };
    case "NEW_UNDERSTANDING":
      return {
        ...state,
        understanding: (state.understanding = action.payload),
      };
    case "NEW_SUPPORTED":
      return { ...state, support: (state.support = action.payload) };
    case "NEW_COMMENTS":
      return { ...state, comments: (state.comments = action.payload) };
  }
  // Whatever we return from the reducer
  // is the value of our state
  return state;
};

//End Reducers
// Create the store
const store = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
