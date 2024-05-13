import { createSlice } from "@reduxjs/toolkit";
import { getYesterdayExpense, getCurrentExpense } from "../thunks";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    loading: false,
    error: false,
    currentExpense: 0,
    yesterdayExpense: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentExpense.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getYesterdayExpense.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getCurrentExpense.fulfilled, (state, action) => {
      state.loading = true;
      state.error = false;
      state.currentExpense = action.payload.expense;
    });
    builder.addCase(getYesterdayExpense.fulfilled, (state, action) => {
      state.loading = true;
      state.error = false;
      state.yesterdayExpense = action.payload.expense;
    });
    builder.addCase(getCurrentExpense.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getYesterdayExpense.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default expensesSlice.reducer;
