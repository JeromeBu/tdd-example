import { UseCase } from "../../core/UseCase";
import { TodoEntity } from "../entities/TodoEntity";
import { TodoRepository } from "../ports/TodoRepository";
import * as Yup from "yup";

type AddTodoParams = { uuid: string; description: string };

export const addTodoParamsSchema: Yup.ObjectSchema<AddTodoParams> = Yup.object({
  description: Yup.string().required(),
  uuid: Yup.string().required(),
}).required();

// type AddTodoParams = Yup.InferType<typeof addTodoParamsSchema>;

export class AddTodo implements UseCase<AddTodoParams> {
  private todoRepository: TodoRepository;

  public async execute(params: AddTodoParams) {
    const todo = new TodoEntity(params);
    await this.todoRepository.save(todo);
  }

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }
}
