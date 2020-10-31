import express, { Router } from "express";
// import { getUsecases } from "./config";
import bodyParser from "body-parser";
// import { sendHttpResponse } from "./helpers/sendHttpResponse";

const app = express();
const router = Router();

app.use(bodyParser.json());

router.route("/").get((req, res) => {
  return res.json({ message: "Hello World !" });
});

// const useCases = getUsecases();

router.route("/todos").post(async (req, res) => {
  return res.json({ message: "TODO" });
});

app.use(router);

export { app };
