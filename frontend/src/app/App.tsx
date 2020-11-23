import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoComponent } from "../components/TodoComponent";
import { actions } from "../core-logic/store/rootAction";
import type { RootState } from "../core-logic/store/rootReducer";
import { v4 as uuidV4 } from "uuid";
import "./App.css";

export const App = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const addTodo = () => {
    dispatch(actions.createTodoThunk({ uuid: uuidV4(), description }));
    setDescription("");
  };

  return (
    <div className="App">
      My todo app
      <div>
        {todos.map((todo) => (
          <TodoComponent key={todo.uuid} {...todo} />
        ))}
      </div>
      <div>
        <input
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};
