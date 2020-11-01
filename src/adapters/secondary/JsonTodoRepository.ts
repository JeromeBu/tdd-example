import { TodoEntity } from "../../domain/todos/entities/TodoEntity";
import { TodoRepository } from "../../domain/todos/ports/TodoRepository";
import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export class JsonTodoRepository implements TodoRepository {
  constructor(private path: string) {}

  public async save(todoEntity: TodoEntity) {
    const todos = await this._readData();
    todos.push(todoEntity);
    writeFile(this.path, JSON.stringify(todos));
  }

  private async _readData(): Promise<TodoEntity[]> {
    const data = await readFile(this.path);
    const todos = JSON.parse(data.toString());
    return todos;
  }
}
