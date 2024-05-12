import "./assets/css/style.css";
import ReactDOM from "react-dom/client";
import store, { Provider } from "./store/index.js";
import "./i18n";
import App from "./App.jsx";
const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <App />
  </Provider>
);
