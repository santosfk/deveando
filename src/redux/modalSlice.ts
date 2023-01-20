import { createSlice } from "@reduxjs/toolkit";

const modalInitialState = {
  isOn: false,
};
export const slice = createSlice({
  name: "modalSlice",
  initialState: modalInitialState,
  reducers: {
    setModalState(state, { payload }) {
      return {
        ...state,
        isOn: payload,
      };
    },
  },
});
export const { setModalState } = slice.actions;
export default slice.reducer;
