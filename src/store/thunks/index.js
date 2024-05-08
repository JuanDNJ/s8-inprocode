import { createAsyncThunk } from "@reduxjs/toolkit";
// import moock from "../../data/moock.json";

export const getAllBalance = createAsyncThunk("balance", async () => {
  try {
    const requets = await fetch(
      `https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/months.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const results = await requets.json();
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
});
export const getMonthBalance = createAsyncThunk("balance", async (month) => {
  try {
    const requets = await fetch(
      `https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/months/${month}.json`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const results = await requets.json();
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
});
