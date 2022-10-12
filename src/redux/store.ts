import { configureStore } from "@reduxjs/toolkit";
import blogInfo from "./blogInfoSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    blogInfo: blogInfo,
    modalSlice:modalSlice

  },
});
