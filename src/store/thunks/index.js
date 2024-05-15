import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  URL_FIEREBASE_DATA_BASE,
  URL_MOUTHS,
  currentDay,
  currentMonth,
  currentWeek,
} from "../../config";

export const getBalanceById = createAsyncThunk(
  "getBalanceById",
  async (idBalance) => {
    try {
      const requets = await fetch(
        `${URL_FIEREBASE_DATA_BASE}/${idBalance}.json`
      );
      const results = await requets.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getWeeksByIdMonth = createAsyncThunk(
  "getWeeksByIdMonth",
  async (payload) => {
    try {
      const idBalance = payload.idBalance;
      const idMonth = payload.idMonth;
      const url = `${URL_FIEREBASE_DATA_BASE}/${idBalance}/months/${idMonth}/weeks.json`;
      const requets = await fetch(url);
      const results = await requets.json();

      return results;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getMounths = createAsyncThunk("getMounths", async (payload) => {
  try {
    const idMounth = payload.idMounth;
    const url = `${URL_MOUTHS}/${idMounth}.json`;
    const requets = await fetch(url);
    const results = await requets.json();
    return results;
  } catch (error) {
    console.error(error);
  }
});
export const getCurrentExpense = createAsyncThunk(
  "getCurrentExpense",
  async () => {
    try {
      const request = await fetch(
        `${URL_FIEREBASE_DATA_BASE}/0/months/${currentMonth}/weeks/${currentWeek}/days/${currentDay}.json`
      );
      const response = await request.json();
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getYesterdayExpense = createAsyncThunk(
  "getYesterdayExpense",
  async () => {
    try {
      const yesterday = currentDay - 1;
      const yesterdayExpense = yesterday === -1 ? 6 : yesterday;
      const request = await fetch(
        `${URL_FIEREBASE_DATA_BASE}/0/months/${currentMonth}/weeks/${currentWeek}/days/${yesterdayExpense}.json`
      );
      const response = await request.json();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
);
