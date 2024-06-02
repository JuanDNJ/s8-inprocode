import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import balanceSheetReducer from "./slices/balance"
import themesReducers from "./slices/theme";

const store = configureStore({
  reducer: {
    theme: themesReducers,
    balance_sheets: balanceSheetReducer
  },
});

export { Provider, useSelector as getSelector, useDispatch as getDispacth };
export default store;
