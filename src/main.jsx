import "./assets/css/style.css";
import ReactDOM from "react-dom/client";
import store, { Provider } from "./store/index.js";
import Router from "./Router.jsx";
import "./i18n";
const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
