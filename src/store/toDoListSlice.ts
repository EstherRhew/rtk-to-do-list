import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export const colorTable = {
  orange: "#F6bd60",
  beige: "#F7ede2",
  lightPink: "#F5cac3",
  green: "#84a59d",
  pink: "#f28482"
}

export interface toDoState {
  id: number;
  content: string;
  date: string;
  color: string;
}

const initialState: toDoState[] = [{
    id: 0,
    content: "Hello! Add your todos here!",
    date: new Date().toDateString(),
    color: colorTable.orange

}]

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