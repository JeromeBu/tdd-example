import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer, todosName } from "../todosSlice";

export const rootReducer = combineReducers({
  [todosName]: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
