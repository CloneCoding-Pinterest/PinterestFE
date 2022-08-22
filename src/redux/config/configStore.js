import { configureStore } from "@reduxjs/toolkit";

import users from "../modules/users";
import pins from "../modules/pinSlice";
import comments from "../modules/commentSlice";

const store = configureStore({
  reducer: { users: users, pins: pins, comments: comments },
});

export default store;
