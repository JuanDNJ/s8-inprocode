import { createSlice } from "@reduxjs/toolkit";
import { calacualteExpenseWeek } from "../../utils";


export const billSlice = createSlice({
    name: "createSlice",
    initialState: {
        todayExpense: 25,
        weekExpense: 1589
    },
    reducers: {
        setTodayExpense: (state, action) => {
            state.todayExpense = action.payload
        },
        setWeekExpense: (state, action) => {
            state.weekExpense = calacualteExpenseWeek(action.payload)
        }
    }
})


export const { setTodayExpense, setWeekExpense } = billSlice.actions
export default billSlice.reducer