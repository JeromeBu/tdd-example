import { AddTodo } from "../../domain/todos/useCases/AddTodo";
import { ListTodos } from "../../domain/todos/useCases/ListTodos";
import { InMemoryTodoRepository } from "../secondary/InMemoryTodoRepository";

export const getRepositories = () => ({
  todo: new InMemoryTodoRepository(),
});

export const getUsecases = () => {
  const repositories = getRepositories();

  return {
    addTodo: new AddTodo(repositories.todo),
    listTodos: new ListTodos(repositories.todo),
  };
};
