import { Todo } from "../todosSlice";

export interface TodosGateway {
  create: (todo: Todo) => Promise<void>;
}

export class InMemoryTodosGateway implements TodosGateway {
  public async create(todo: Todo) {
    if (this._createTodoError) throw new Error(this._createTodoError);
    this._todos.push(todo);
  }

  private _todos: Todo[] = [];
  get todos() {
    return this._todos;
  }

  private _createTodoError?: string;
  public setCreateTodoError(errorMessage: string) {
    this._createTodoError = errorMessage;
  }
}

// export class AxiosTodosGateway {}
