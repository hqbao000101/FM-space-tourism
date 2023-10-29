import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    project: (state = "Front-end Mentor-Space Tourism", action) => {
      return state;
    },
  },
});
