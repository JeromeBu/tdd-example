import type { AppThunk } from "../store/store.config";
import type { Todo } from "../todosSlice";
import { actions } from "../store/rootAction";

export const createTodoThunk = (todo: Todo): AppThunk => (
  dispatch,
  _,
  { todosGateway }
) => {
  dispatch(actions.createTodoRequested());
  return todosGateway
    .create(todo)
    .then(() => {
      dispatch(actions.todoCreated(todo));
    })
    .catch((error: Error) => {
      dispatch(actions.createTodoFailed(error.message));
    });
};
