import { listTodo } from "./ListTodo";
// import { v4 as generateUuid } from "uuid";

// Add Todo :
// You can list all the Todos that have been added

describe("List Todo", () => {
  describe("No Todos have been saved", () => {
    it("returns no todos", async () => {
      listTodo("");
    });
  });
});
