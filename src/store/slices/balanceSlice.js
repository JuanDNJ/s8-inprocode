import { createSlice } from "@reduxjs/toolkit";
import { getBalanceById, getWeeksByIdMonth, getMounths } from "../thunks";
export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    loading: false,
    error: false,
    data: {},
    weeksCount: 0,
    mounthsCount: 11,
    mounth: {},
  },
  reducers: {
    setWeekCount: (state, action) => {
      state.weeksCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBalanceById.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getBalanceById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(getBalanceById.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    // getWeeksByIdMonth
    builder.addCase(getWeeksByIdMonth.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getWeeksByIdMonth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    });
    builder.addCase(getWeeksByIdMonth.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    // getMounths
    builder.addCase(getMounths.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getMounths.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.mounth = action.payload;
    });
    builder.addCase(getMounths.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export const { setWeekCount } = balanceSlice.actions;
export default balanceSlice.reducer;

// extraReducers: (builder) => {
//   builder.addCase(getCurrentMonth.pending, (state) => {
//     state.loading = true;
//     state.error = false;
//   });
//   builder.addCase(getCurrentMonth.fulfilled, (state, action) => {
//     console.log(action.payload);

//     state.loading = false;
//     state.error = false;
//   });
//   builder.addCase(getCurrentMonth.rejected, (state) => {
//     state.loading = false;
//     state.error = true;
//   });
// },
