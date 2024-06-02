import { createAsyncThunk } from "@reduxjs/toolkit";
import bills from "../../data/bills.json"
export const getBalance = createAsyncThunk(
  "getBalance",
  async (year) => {
    try {
      return bills[year];
    } catch (error) {
      console.error(error);
    }
  }
);
