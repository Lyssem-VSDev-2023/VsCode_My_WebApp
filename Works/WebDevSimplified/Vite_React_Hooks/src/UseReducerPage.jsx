import React, { useState, useReducer } from "react";
import Back from "./Back";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import UseReducerToDoList from "./UseReducerToDoList";

export const TODO_ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function UseReducerPage() {
  // **************Standard UseState*******************************
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  // **************UseReducer*******************************

  const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
  };

  const [state_R1, dispatch] = useReducer(reducer, { count_R1: 0 });

  function reducer(state_R1, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count_R1: state_R1.count_R1 + 1 };

      case ACTIONS.DECREMENT:
        return { count_R1: state_R1.count_R1 - 1 };
      default:
        state_R1;
    }
  }

  function increment_R1() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement_R1() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  // **************UseReducer ToDo example (complex state)*******************************

  const [todosState, dispatchTodo] = useReducer(reducer_todo, []);
  const [name, setName] = useState("");

  function reducer_todo(todosState, action) {
    switch (action.type) {
      case TODO_ACTIONS.ADD_TODO:
        return [...todosState, newTodo(action.payload.name)];

      case TODO_ACTIONS.TOGGLE_TODO:
        return todosState.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });

      case TODO_ACTIONS.DELETE_TODO:
        return todosState.filter((todo) => todo.id !== action.payload.id);
        
      default:
        return todosState;
    }
  }

  function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatchTodo({ type: TODO_ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todosState);

  return (
    <>
      <Back></Back>

      {/* **************Standard UseState******************************* */}
      <br />
      <b>Standard useState</b>
      <br />
      <br />
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      {/* **************UseReducer******************************* */}
      <br />
      <hr />
      <br />
      <b>useReducer</b>
      <br />
      <br />
      <button onClick={decrement_R1}>-</button>
      <span>{state_R1.count_R1}</span>
      <button onClick={increment_R1}>+</button>

      {/* **************UseReducer ToDo example (complex state)******************************* */}
      <br />
      <hr />
      <br />
      <b>UseReducer ToDo example (complex state)</b>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todosState.map((todo) => {
        return (
          <UseReducerToDoList
            key={todo.id}
            todo={todo}
            dispatchTodo={dispatchTodo}
          ></UseReducerToDoList>
        );
      })}
    </>
  );
}

export default UseReducerPage;
