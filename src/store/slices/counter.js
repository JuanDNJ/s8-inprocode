import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    discount: (state) => {
      state.count -= 1;
    },
    increase: (state) => {
      state.count += 1;
    },
  },
});
export const { discount, increase } = counter.actions;
export default counter.reducer;
