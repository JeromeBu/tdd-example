import { configureReduxStore } from "./store/store.config";
import { InMemoryTodosGateway } from "./gateways/todosGateway";
import { actions } from "./store/rootAction";

import type { ReduxStore } from "./store/store.config";
import type { Todo } from "./todosSlice";
import type { RootState } from "./store/rootReducer";

const expectStateToEqual = (store: ReduxStore, expectedState: RootState) => {
  expect(store.getState()).toEqual(expectedState);
};

describe("Todos core-logic", () => {
  describe("Create todo", () => {
    let store: ReduxStore;
    let todosGateway: InMemoryTodosGateway;

    beforeEach(() => {
      todosGateway = new InMemoryTodosGateway();
      store = configureReduxStore({ todosGateway });
    });

    it("indicates when a todo is being saved", () => {
      store.dispatch(actions.createTodoRequested());

      expectStateToEqual(store, {
        todos: { isCreating: true, items: [] },
      });
    });

    it("creates a todo", async () => {
      const myTodo: Todo = {
        uuid: "someUuid",
        description: "My todo description",
      };

      await store.dispatch(actions.createTodoThunk(myTodo));

      expectStateToEqual(store, {
        todos: { isCreating: false, items: [myTodo] },
      });
    });

    it("gathers the error message when something wrong happens", async () => {
      expectStateToEqual(store, {
        todos: { isCreating: false, items: [] },
      });

      const myTodo: Todo = {
        uuid: "someUuid",
        description: "My error todo description",
      };

      const errorMessage = "Failed for some reason";
      todosGateway.setCreateTodoError(errorMessage);

      await store.dispatch(actions.createTodoThunk(myTodo));

      expectStateToEqual(store, {
        todos: { isCreating: false, items: [], error: errorMessage },
      });
    });
  });
});
