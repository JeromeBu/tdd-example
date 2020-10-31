import { TodoEntity } from "../entities/TodoEntity";

export interface TodoRepository {
  save: (todoEntity: TodoEntity) => Promise<TodoEntity>;
  getAllTodos: () => Promise<TodoEntity[]>;
}
