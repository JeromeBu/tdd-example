import { TodoEntity } from "../../domain/todos/entities/TodoEntity";
import { TodoRepository } from "../../domain/todos/ports/TodoRepository";

export class InMemoryTodoRepository implements TodoRepository {
  private _todos: TodoEntity[] = [];

  async save(todo: TodoEntity) {
    this._todos.push(todo);
  }

  get todos() {
    return this._todos;
  }
}
