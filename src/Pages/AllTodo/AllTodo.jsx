import React, { Suspense } from "react";
import app from "../../firebase/firebase.init";
import { getDatabase, ref, get } from "firebase/database";
import TodoCard from "./TodoCard";

function AllTodo() {
  const fetchData = async () => {
    const db = getDatabase(app);
    const dbref = ref(db, "todoDB/todos");
    const todos = await get(dbref);
    if (todos.exists()) {
      return Object.values(todos.val());
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div>
        <Suspense fallback={<p>Loading....</p>}>
          <TodoCard todoData={fetchData()} />
        </Suspense>
      </div>
    </div>
  );
}

export default AllTodo;
