import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import type { RootState } from "./rootReducer";
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import type { TodosGateway } from "../gateways/todosGateway";

export type Dependencies = {
  todosGateway: TodosGateway;
};

export const configureReduxStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
      thunk: {
        extraArgument: dependencies,
      },
    }),
  });

export type ReduxStore = ReturnType<typeof configureReduxStore>;

export type AppThunk = ThunkAction<
  Promise<void>,
  RootState,
  Dependencies,
  Action<string>
>;
