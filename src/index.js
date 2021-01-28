import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

let rerender = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById("root")
  );
};

rerender();

store.subscribe(() => {
  rerender();
});

reportWebVitals();
