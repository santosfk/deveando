import { createSlice } from "@reduxjs/toolkit";

const infoBlogState = {
  title: "",
  img: "",
  description: "",
};
export const slice = createSlice({
  name: "blogInfo",
  initialState: infoBlogState,
  reducers: {
    setInfo(state, { payload }) {
      return {
        ...state,
        title: payload.title,
        img: payload.img,
        description: payload.description,
      };
    },
  },
});
export const { setInfo } = slice.actions;
export default slice.reducer;
