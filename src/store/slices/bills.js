import { createSlice } from "@reduxjs/toolkit";
import { calacualteExpenseWeek } from "../../utils";


export const billSlice = createSlice({
    name: "createSlice",
    initialState: {
        todayExpense: 25,
        weekExpense: 1589,
        compareYesterday: 0
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
        }
    }
})


export const { setTodayExpense, setWeekExpense, setCompareYesterday } = billSlice.actions
export default billSlice.reducer