import {configureStore} from "@reduxjs/toolkit";
import toDoListSlice from "./toDoListSlice";

export const store = configureStore({
  reducer: {
    toDoList: toDoListSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch