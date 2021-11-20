import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import interface
import { ITheme } from "../../interfaces";

const initialState: ITheme = {
  direction: "rtl",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set_theme: (state, action: PayloadAction<string>) => {
      state.direction = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_theme } = themeSlice.actions;

export default themeSlice.reducer;
