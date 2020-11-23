import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  uuid: string;
  description: string;
};

export type TodosState = {
  isCreating: boolean;
  items: Todo[];
  error?: string;
};

const initialState: TodosState = {
  isCreating: false,
  items: [],
};

export const todosName = "todos";

const todosSlice = createSlice({
  name: todosName,
  initialState,
  reducers: {
    createTodoRequested: (state) => {
      state.isCreating = true;
    },
    todoCreated: (state, action: PayloadAction<Todo>) => {
      state.isCreating = false;
      state.items.push(action.payload);
    },
    createTodoFailed: (state, action: PayloadAction<string>) => {
      state.isCreating = false;
      state.error = action.payload;
    },
  },
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
