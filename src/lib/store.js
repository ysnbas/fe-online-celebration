import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@Lib/features/user/userSlice";

export const makeStore = configureStore({
  reducer: {
    user: userSlice,
  },
});
