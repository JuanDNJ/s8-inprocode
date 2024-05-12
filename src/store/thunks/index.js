import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_FIEREBASE_DATA_BASE } from "../../utils";
import { URL_MOUTHS } from "../../config";
// import moock from "../../data/moock.json";

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

// export const getDataByNameMonth = createAsyncThunk(
//   "balance",
//   async (payload) => {
//     try {
//       const requets = await fetch(
//         `${URL_FIEREBASE_DATA_BASE}${payload.monthName}.json`
//       );
//       const results = await requets.json();
//       console.log(results);
//       return results;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );
// export const getCurrentMonth = createAsyncThunk(
//   "monthBalance",
//   async (payload) => {
//     console.log(payload);
//     const weekNumber = payload.week;
//     const url = `${URL_FIEREBASE_DATA_BASE}months/${payload.month}/weeks/${weekNumber}.json`;
//     const requets = await fetch(url);
//     const results = await requets.json();
//     // console.log(results);
//     return results;
//   }
// );
// export const getMonthByName = createAsyncThunk(
//   "monthByName",
//   async (payload) => {
//     console.log(payload);
//     const url = `${URL_FIEREBASE_DATA_BASE}months/${payload.name}.json`;
//     const requets = await fetch(url);
//     const results = await requets.json();
//     // console.log(results);
//     return results;
//   }
// );
