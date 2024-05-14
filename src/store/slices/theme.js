import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../config";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: themes[0],
  },
  reducers: {
    selectTheme: (state, action) => {
      const { id } = action.payload;
      state.theme = themes[id];
    },
  },
});
export const { selectTheme } = themeSlice.actions;
export default themeSlice.reducer;
