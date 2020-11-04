import { TodoEntity } from "../entities/TodoEntity";

export interface TodoRepository {
  save: (todo: TodoEntity) => Promise<void>;
}

class MachinAdapter implements TodoRepository {
  save()
}