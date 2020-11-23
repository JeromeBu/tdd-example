import * as React from "react";
import type { Todo } from "../core-logic/todosSlice";

type TodoProps = Todo;

export const TodoComponent = ({ description }: TodoProps) => (
  <div> → {description}</div>
);
