import express, { Router } from "express";
import { getUsecases } from "./config";
import bodyParser from "body-parser";
import { addTodoParamsSchema } from "../../domain/todos/useCases/AddTodo";
import { callUseCase } from "./helpers/callUseCase";
import { sendHttpResponse } from "./helpers/sendHttpResponse";

const app = express();
const router = Router();

app.use(bodyParser.json());

router.route("/").get((req, res) => {
  return res.json({ message: "Hello World !" });
});

const useCases = getUsecases();

router
  .route("/todos")
  .post(async (req, res) =>
    sendHttpResponse(res, () =>
      callUseCase({
        useCase: useCases.addTodo,
        validationSchema: addTodoParamsSchema,
        useCaseParams: req.body,
      })
    )
  )
  .get(async (req, res) =>
    sendHttpResponse(res, () => useCases.listTodos.execute())
  );

app.use(router);

export { app };
