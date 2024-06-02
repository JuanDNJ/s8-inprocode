import { createSlice } from "@reduxjs/toolkit";


export function billSlice() {
    return createSlice({
        name: "createSlice",
        initialState: {
            todayExpense: 25,
            weekExpense: 1589
        },
        reducers: {
            todayExpense: (state, action) => {
                state.todayExpense = action.payload
            },
            weekExpense: (state, action) => {
                state.weekExpense = action.payload
            }
        }
    })
}

export const { todayExpense, weekExpense } = billSlice.actions
export default billSlice.reducers