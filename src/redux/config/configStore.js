import { configureStore } from "@reduxjs/toolkit";

import signin from "../modules/toLogin";

const store = configureStore({
  reducer: { signin },
});

export default store;
