import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import store, { Provider } from "./store/index.js";
import Router from "./Router.jsx";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
