import { UseCase } from "../../core/UseCase";
import { TodoEntity } from "../entities/TodoEntity";
import { TodoRepository } from "../ports/TodoRepository";

export class ListTodos implements UseCase<void, TodoEntity[]> {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  public async execute() {
    return this.todoRepository.getAllTodos();
  }
}
