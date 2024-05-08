import { createSlice } from "@reduxjs/toolkit";
import { getMonthBalance } from "../thunks";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    loading: false,
    error: false,
    balance: {},
    totalBalanceWeek: 0,
  },
  reducers: {
    getWeekBalance: (state, action) => {
      const { days } = action.payload;
      state.totalBalanceWeek =
        days && days.reduce((acc, next) => (acc += next.expense), 0);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMonthBalance.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getMonthBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.balance = action.payload;
    });
    builder.addCase(getMonthBalance.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { getWeekBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
// const getBalance = (month = "january", week = 0) => {
//   const total = months[month].weeks[week].days.reduce(
//     (acc, next) => (acc += next.expense),
//     0
//   );
//   dispatch(setbalance(total));
//   return total;
// };
