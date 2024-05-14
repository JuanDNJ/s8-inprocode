import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";

import counterReducers from "./slices/counter";
import balanceReducers from "./slices/balanceSlice";
import expensesReducers from "./slices/expenses";
import themesReducers from "./slices/theme";
const store = configureStore({
  reducer: {
    counter: counterReducers,
    balance: balanceReducers,
    expenses: expensesReducers,
    theme: themesReducers,
  },
});
export { Provider, useSelector as getSelector, useDispatch as getDispacth };
export default store;
