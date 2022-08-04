import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

interface toDoState {
  id: number;
  content: string;
  date: string;
  color: string;
}

const initialState: toDoState[] = []

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<toDoState>) => {
      state.push(action.payload)
    },
    remove: (state, action:PayloadAction<toDoState>) => {
      state.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const {add, remove} = toDoListSlice.actions
export const selectToDoList = (state: RootState) => state.toDoList

export default toDoListSlice.reducer;