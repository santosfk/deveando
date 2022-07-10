import { configureStore } from "@reduxjs/toolkit";
import blogInfo from "./blogInfoSlice";

export default configureStore({
  reducer: {
    blogInfo: blogInfo,
  },
});
