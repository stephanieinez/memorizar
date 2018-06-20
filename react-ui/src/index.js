import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { CHANGE_WORD } from "./redux/action";
import store from "./store";
import socket from "./socket";

socket.on("showWord", word => {
  if (word) {
    store.dispatch({ type: CHANGE_WORD, word });
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
