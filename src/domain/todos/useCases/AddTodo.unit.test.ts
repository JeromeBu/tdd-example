import { AddTodo } from "./AddTodo";
// import { v4 as generateUuid } from "uuid";

// Add Todo :
// - you cannot add a Todo with a text of less than 3 caracters long
// - you can save a Todo
// - you cannot add 2 Todos with the same uuid
// - bonus : you can add Todos only between 10h and 18h

describe("Add Todo", () => {
  describe("Description has less than 3 charaters", () => {
    it("refuses to add the Todo with an explicit warning", async () => {});
  });

  const expectPromiseToFailWith = async (
    promise: Promise<unknown>,
    errorMessage: string
  ) => {
    await expect(promise).rejects.toThrowError(new Error(errorMessage));
  };
});
