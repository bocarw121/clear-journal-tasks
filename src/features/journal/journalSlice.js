import { createSlice } from "@reduxjs/toolkit";


const journalSlice = createSlice({
  name: "journal",
  initialState: {
    tasks: [],
    isTaskCreated: false,
    isTaskDeleted: false,
    isTaskLoading: false,
  },
  reducers: {
    toggleCompletedTask: (state, action) => {
      state.tasks[action.payload].isComplete = !state.tasks[action.payload]
        .isComplete;
    },
  },
  
});

export const journalSelector = (state) => state.journal;

export const { addJournalTask, toggleCompletedTask } = journalSlice.actions;

export default journalSlice.reducer;
