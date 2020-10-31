import { AddTodo } from "../../domain/todos/useCases/AddTodo";
import { InMemoryTodoRepository } from "../secondary/InMemoryTodoRepository";

export const getRepositories = () => ({
  todo: new InMemoryTodoRepository(),
});

export const getUsecases = () => {
  const repositories = getRepositories();

  return {
    addTodo: new AddTodo({ uuidGenerator: repositories.todo }),
  };
};
