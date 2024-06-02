import { createSlice } from "@reduxjs/toolkit";
import bills from "../../data/bills.json";
import { getCurrentMounth, getDayOfWeekNumberMondayFirst, getWeekOfMonth } from "../../utils";

export const balanceSheetSlice = createSlice({
    name: "balanceSheetSlice",
    initialState: {
        bills,
        current_date: {
            year: 2024,
            month: getCurrentMounth(),
            week: getWeekOfMonth() - 1,
            day: getDayOfWeekNumberMondayFirst(),
        },
        year: 2024,
        countWeek: getWeekOfMonth() - 1,
        countMonth: getCurrentMounth()
    },
    reducers: {
        incrementWeek: (state) => {
            state.countWeek += 1
        },
        decrementWeek: (state) => {
            state.countWeek -= 1
        },
        incrementMonth: (state) => {
            state.countMonth += 1
        },
        decrementMonth: (state) => {
            state.countMonth -= 1
        }
    },

})
export const { incrementWeek, decrementWeek, incrementMonth, decrementMonth } = balanceSheetSlice.actions
export default balanceSheetSlice.reducer;