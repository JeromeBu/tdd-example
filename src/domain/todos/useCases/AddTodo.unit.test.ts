import { AddTodo } from "./AddTodo";
import { v4 as generateUuid } from "uuid";
import { InMemoryTodoRepository } from "../../../adapters/secondary/InMemoryTodoRepository";
import { expectPromiseToFailWith } from "../../../utils/test.helpers";

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

  describe("Todo with same uuid already exists", () => {
    it("refuses to add the Todo with an explicit warning", async () => {
      todoRepository.setTodos([
        { uuid: "alreadyExistingUuid", description: "Some description" },
      ]);
      await expectPromiseToFailWith(
        addTodo.execute({
          uuid: "alreadyExistingUuid",
          description: "My description",
        }),
        "A Todo with the same uuid already exists"
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
});
