import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SamuraiApp from "./App";
import store from "./redux/redux-store";

let rerender = () => {
  ReactDOM.render( <SamuraiApp />,
    document.getElementById("root")
  );
};

rerender();

store.subscribe(() => {
  rerender();
});

reportWebVitals();
