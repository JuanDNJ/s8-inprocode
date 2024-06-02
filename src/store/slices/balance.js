import { createSlice } from "@reduxjs/toolkit";
import {
    currentDay,
    currentMonth,
    currentWeek,
} from "../../config";
import { getBalance } from "../thunks";

export const balanceSheetSlice = createSlice({
    name: "balanceSheetSlice",
    initialState: {
        is_loding: false,
        error: false,
        allBills: {},
        current_date: {
            year: 2024,
            month: 5,
            week: 0,
            day: 1,
        },
        currentDay,
        currentMonth,
        currentWeek,
        data: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBalance.pending, (state) => {
            state.is_loding = true
            state.error = false
        })
        builder.addCase(getBalance.fulfilled, (state, action) => {
            state.is_loding = false
            state.error = false

            state.allBills = action.payload
        })
        builder.addCase(getBalance.rejected, (state) => {
            state.is_loding = false
            state.error = true
        })
    }
})


export default balanceSheetSlice.reducer;