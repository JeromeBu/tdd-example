import { InMemoryTodosGateway } from "../gateways/todosGateway";
import { configureReduxStore } from "./store.config";

export const appStore = configureReduxStore({
  todosGateway: new InMemoryTodosGateway(),
});
