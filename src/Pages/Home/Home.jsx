import React from "react";
import TodoList from "../../TodoList/TodoList";

function Home() {
  return (
    <div>
      <h1 className="todo-form">Todo List</h1>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default Home;
