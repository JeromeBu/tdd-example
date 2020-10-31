import { AddTodo } from "./AddTodo";
import { v4 as generateUuid } from "uuid";
import { InMemoryTodoRepository } from "../../../adapters/secondary/InMemoryTodoRepository";

describe("Add Todo", () => {
  let addTodo: AddTodo;
  let todoRepository: InMemoryTodoRepository;

  beforeEach(() => {
    todoRepository = new InMemoryTodoRepository();
    addTodo = new AddTodo(todoRepository);
  });

  describe("Description has less than 3 charaters", () => {
    it("refuses to add the Todo with an explicit warning", async () => {
      await expectPromiseToFailWith(
        addTodo.execute({ uuid: "someUuid", description: "123" }),
        "Todo description should be at least 3 characters long"
      );
    });
  });

  describe("Description is fine", () => {
    it("saves the todo", async () => {
      const uuid = generateUuid();
      const description = "My description";
      await addTodo.execute({ uuid, description });
      expect(todoRepository.todos).toEqual([{ uuid, description }]);
    });
  });

  const expectPromiseToFailWith = async (
    promise: Promise<unknown>,
    errorMessage: string
  ) => {
    await expect(promise).rejects.toThrowError(new Error(errorMessage));
  };
});
