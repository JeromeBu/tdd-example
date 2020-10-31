import { TodoRepository } from "../../domain/todos/ports/TodoRepository";
import { TodoEntity } from "../../domain/todos/entities/TodoEntity";

export class InMemoryTodoRepository implements TodoRepository {
  private _todos: TodoEntity[] = [];

  public async save(todoEntity: TodoEntity) {
    this._todos.push(todoEntity);
    return todoEntity;
  }

  get todos() {
    return this._todos;
  }

  // setTodos(todoEntites: TodoEntity[]) {
  //   this._todos = todoEntites;
  // }
}
