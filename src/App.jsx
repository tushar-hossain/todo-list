import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <>
      <h1 className="todo">Todo List</h1>
      <TodoList />
    </>
  );
}

export default App;
