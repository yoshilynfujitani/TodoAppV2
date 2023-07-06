import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/Tasks/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
