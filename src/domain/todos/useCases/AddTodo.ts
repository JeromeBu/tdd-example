import { UseCase } from "../../core/UseCase";
import { TodoEntity } from "../entities/TodoEntity";
import { TodoRepository } from "../ports/TodoRepository";
import * as Yup from "yup";
import { Clock } from "../ports/Clock";

type AddTodoDependencies = { todoRepository: TodoRepository; clock: Clock };

type AddTodoParams = { uuid: string; description: string };

export const addTodoParamsSchema: Yup.ObjectSchema<AddTodoParams> = Yup.object({
  description: Yup.string().required(),
  uuid: Yup.string().required(),
}).required();

// type could also be infer from yup schema :
// type AddTodoParams = Yup.InferType<typeof addTodoParamsSchema>;

export class AddTodo implements UseCase<AddTodoParams> {
  private todoRepository: TodoRepository;
  private clock: Clock;

  public async execute(params: AddTodoParams) {
    const hour = this.clock.getNow().getHours();
    if (hour < 8 || hour >= 12)
      throw new Error("You can only add todos between 08h00 and 12h00");

    const todo = new TodoEntity(params);
    await this.todoRepository.save(todo);
  }

  constructor({ todoRepository, clock }: AddTodoDependencies) {
    this.todoRepository = todoRepository;
    this.clock = clock;
  }
}
