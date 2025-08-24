import React, { Suspense, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import { getDatabase, ref, get } from "firebase/database";
import TodoCard from "./TodoTable";

function AllTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbref = ref(db, "todoDB/todos");
      const todos = await get(dbref);
      if (todos.exists()) {
        setTodos(Object.values(todos.val()));
      } else {
        alert("error");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="todo">Todo</h1>
      <div>
        <Suspense fallback={<p>Loading....</p>}>
          <TodoCard data={todos} />
        </Suspense>
      </div>
    </div>
  );
}

export default AllTodo;
