import { TodoEntity } from "../../domain/todos/entities/TodoEntity";
import { JsonTodoRepository } from "./JsonTodoRepository";
import * as fs from "fs";
import * as util from "util";
import { TodoRepository } from "../../domain/todos/ports/TodoRepository";
import { expectPromiseToFailWith } from "../../utils/test.helpers";

const readFile = util.promisify(fs.readFile);

describe("JsonTodoRepository", () => {
  const dataPath = `${__dirname}/data.json`;
  let csvTodoRepository: TodoRepository;

  beforeEach(() => {
    fs.writeFileSync(dataPath, "[]");
    csvTodoRepository = new JsonTodoRepository(dataPath);
  });

  describe("save", () => {
    it("adds the Todo to the json file when empty", async () => {
      const todoEntity = new TodoEntity({
        uuid: "someUuid",
        description: "my csv description",
      });
      await csvTodoRepository.save(todoEntity);
      await expectDataToBe([todoEntity]);
    });

    it("adds the Todo to the json file when data is already there", async () => {
      fillJsonWith([
        { uuid: "alreadyThereUuid", description: "Already there description" },
      ]);

      const todoEntity = new TodoEntity({
        uuid: "newlyAddedUuid",
        description: "Newly added description",
      });

      await csvTodoRepository.save(todoEntity);
      await expectDataToBe([
        { uuid: "alreadyThereUuid", description: "Already there description" },
        todoEntity,
      ]);
    });

    it("cannot add a Todo if there is already one with the same uuid", async () => {
      fillJsonWith([
        { uuid: "existingUuid", description: "Already there description" },
      ]);
      const todoEntity = new TodoEntity({
        uuid: "existingUuid",
        description: "Newly added description",
      });

      await expectPromiseToFailWith(
        csvTodoRepository.save(todoEntity),
        "A Todo with the same uuid already exists"
      );
    });
  });

  describe("getAllTodos", () => {
    it("gets empty array when no Todos are stored", async () => {
      const todos = await csvTodoRepository.getAllTodos();
      expect(todos).toEqual([]);
    });

    it("gets the Todos stored", async () => {
      const expectedTodos = [
        { uuid: "someUuid", description: "My description" },
        { uuid: "someOtherUuid", description: "My other description" },
      ];
      fillJsonWith(expectedTodos);
      const todos = await csvTodoRepository.getAllTodos();
      expect(todos).toEqual(expectedTodos);
    });
  });

  const expectDataToBe = async (todos: TodoEntity[]) => {
    const data = await readFile(dataPath);
    const parsedData = JSON.parse(data.toString());
    expect(parsedData).toEqual(todos);
  };

  const fillJsonWith = (todos: TodoEntity[]) => {
    fs.writeFileSync(dataPath, JSON.stringify(todos));
  };
});
