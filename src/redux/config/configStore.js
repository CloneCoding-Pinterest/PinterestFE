import { configureStore } from "@reduxjs/toolkit";
import signin from "../modules/toLogin";
import users from "../modules/users";
import pins from "../modules/pinSlice";
// import comments from "../modules/commentSlice";

const store = configureStore({
  reducer: { users: users, pins: pins, signin: signin },
  // reducer: { users: users, pins: pins, comments: comments, signin:signin },
});

export default store;
