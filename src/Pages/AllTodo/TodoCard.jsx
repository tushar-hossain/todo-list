import React, { use } from "react";

function TodoCard({ todoData }) {
  const data = use(todoData);

  return (
    <div className="todo-container">
      {data.map((todo, index) => {
        return (
          <div key={index} className="todoCard">
            <h3>{todo.title}</h3>
            <p>{todo.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TodoCard;
