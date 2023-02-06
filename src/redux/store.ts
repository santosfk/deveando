import { configureStore } from "@reduxjs/toolkit";
import blogInfo from "./blogInfoSlice";

import themeSwitcher from "./themeSwitcher";
("./themeSwitcher");

export default configureStore({
  reducer: {
    blogInfo: blogInfo,
    themeSwitcher: themeSwitcher,
  },
});
