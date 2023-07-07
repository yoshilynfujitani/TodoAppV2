import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addtask(state, action) {
      state.task.push(action.payload);
    },
    edittask(state, action) {
      const selectedtask = state.task.find(
        (task) => task.id === action.payload.id
      );
      selectedtask.title = action.payload.editedtitle;
      selectedtask.subject = action.payload.editedsubject;
      selectedtask.content = action.payload.editedcontent;
      selectedtask.SerializedDeadline = action.payload.SerializedDeadline;
    },
    deletetask(state, action) {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    cleartask(state) {
      state.task = [];
    },
  },
});

export const { addtask, edittask, deletetask, cleartask } = taskSlice.actions;

export default taskSlice.reducer;

export const getTasks = (state) => state.task.task;
