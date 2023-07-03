import React from "react";
import { TODO_ACTIONS } from "./UseReducerPage";

function UseReducerToDoList({ todo, dispatchTodo }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>

      <button
        onClick={() =>
          dispatchTodo({
            type: TODO_ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatchTodo({
            type: TODO_ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default UseReducerToDoList;
