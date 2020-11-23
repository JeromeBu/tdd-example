import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import { Provider } from "react-redux";
import reportWebVitals from "./app/reportWebVitals";
import { appStore } from "./core-logic/store/initializeStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
