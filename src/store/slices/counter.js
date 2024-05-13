import { createSlice } from "@reduxjs/toolkit";
import { currentDay, currentMonth, currentWeek } from "../../config";

export const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    countYear: 0,
    countMonth: currentMonth,
    countWeek: currentWeek,
    countDay: currentDay,
  },
  reducers: {
    discount: (state) => {
      state.count--;
    },
    increase: (state) => {
      state.count++;
    },
    weekAmount: (state) => {
      state.countWeek++;
    },
    weekDiscount: (state) => {
      state.countWeek--;
    },
    monthAmount: (state) => {
      state.countMonth = state.countMonth + 1;
    },
    monthDiscount: (state) => {
      state.countMonth = state.countMonth - 1;
    },
  },
});
export const {
  discount,
  increase,
  weekAmount,
  weekDiscount,
  monthAmount,
  monthDiscount,
} = counter.actions;
export default counter.reducer;
