import { createSlice } from "@reduxjs/toolkit";
import { calacualteExpenseWeek } from "../../utils";


export const billSlice = createSlice({
    name: "createSlice",
    initialState: {
        todayExpense: 25,
        weekExpense: 1589,
        compareYesterday: 0,
        day_bill: 0,
        yesterday_bill: 0
    },
    reducers: {
        setTodayExpense: (state, action) => {
            state.todayExpense = action.payload
        },
        setWeekExpense: (state, action) => {
            state.weekExpense = calacualteExpenseWeek(action.payload)
        },
        setCompareYesterday: (state, action) => {
            state.compareYesterday = action.payload
        },
        setParams: (state, action) => {
            state.day_bill = action.payload.day_bill
            state.yesterday_bill = action.payload.yesterday_bill
        }
    }
})


export const { setTodayExpense, setWeekExpense, setCompareYesterday, setParams } = billSlice.actions
export default billSlice.reducer