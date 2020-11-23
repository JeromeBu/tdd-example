import { todosActions } from "../todosSlice";
import { createTodoThunk } from "../thunks/createTodoThunk";

export const actions = {
  ...todosActions,
  createTodoThunk,
};
