import { InMemoryTodoRepository } from "../../../adapters/secondary/InMemoryTodoRepository";
import { AddTodo } from "./AddTodo";
// import { v4 as generateUuid } from "uuid";

// Add Todo :
// - you cannot add a Todo with a text of less than 3 caracters long
// - you can save a Todo
// - trailing white spaces should be removed, and text should be capitalize
// - you cannot add 2 Todos with the same uuid

// - bonus : you can add Todos only between 08h and 12h

describe("Add Todo", () => {
  describe("Description has less than 3 charaters", () => {
    it("refuses to add the Todo with an explicit warning", async () => {
      const description = "12";
      const todoRepository = new InMemoryTodoRepository();
      const addTodo = new AddTodo(todoRepository);
      await expectPromiseToFailWith(
        addTodo.execute({ description }),
        "Todo description must be at least 4 characters"
      );
    });
  });

  describe("Description is fine", () => {
    it("save the Todo", async () => {
      const todoRepository = new InMemoryTodoRepository();
      const addTodo = new AddTodo(todoRepository);
      const description = "My description is fine";
      await addTodo.execute({ description });
      expect(todoRepository.todos).toEqual([{ description }]);
    });
  });

  const expectPromiseToFailWith = async (
    promise: Promise<unknown>,
    errorMessage: string
  ) => {
    await expect(promise).rejects.toThrowError(new Error(errorMessage));
  };
});
