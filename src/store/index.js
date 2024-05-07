import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";

import counterReducers from "./slices/counter";

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});
export { Provider, useSelector, useDispatch };
export default store;
