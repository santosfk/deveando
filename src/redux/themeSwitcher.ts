import { createSlice } from "@reduxjs/toolkit";

const themeInitialState = {
  isOn: false,
};
export const slice = createSlice({
  name: "themeSwitcher",
  initialState: themeInitialState,
  reducers: {
    setTheme(state) {
      return {
        ...state,
        isOn: !state,
      };
    },
  },
});
export const { setTheme } = slice.actions;
export default slice.reducer;
