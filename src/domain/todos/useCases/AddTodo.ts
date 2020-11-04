import { TodoEntity } from "../entities/TodoEntity";
import { TodoRepository } from "../ports/TodoRepository";

type AddTodoParams = {
  description: string;
};

export class AddTodo {
  todoRepository: TodoRepository;

  constructor(repository: TodoRepository) {
    this.todoRepository = repository;
  }

  async execute({ description }: AddTodoParams) {
    if (description.length < 4)
      throw new Error("Todo description must be at least 4 characters");
    const todo: TodoEntity = {
      description,
    };
    this.todoRepository.save(todo);
  }
}
