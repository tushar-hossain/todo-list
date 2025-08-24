import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { Link } from "react-router";
import { getDatabase, ref, get, remove } from "firebase/database";
import app from "../../firebase/firebase.init";

function TodoCard() {
  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
  };

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbref = ref(db, "todoDB/todos");
      const todos = await get(dbref);
      if (todos.exists()) {
        const myData = todos.val();
        const temporarryArray = Object.keys(myData).map((myFireId) => {
          return {
            ...myData[myFireId],
            todoId: myFireId,
          };
        });

        setTodos(Object.values(temporarryArray));
      } else {
        alert("error");
      }
    };

    fetchData();
  }, []);

  // delete todo
  const handelDelete = async (id) => {
    console.log(id);
    const db = getDatabase(app);
    const dbref = ref(db, "todoDB/todos/" + id);
    await remove(dbref);
    window.location.reload();
  };

  return (
    <div className="todo-container">
      <table>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Due Date</th>
          <th>Action</th>
        </thead>

        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={todo.todoId}>
                {console.log(todo)}
                <td>{index + 1}</td>
                <td>
                  <p>{todo.title}</p>
                </td>
                <td>
                  <p>{todo.date}</p>
                </td>
                <td className="action">
                  <Checkbox onChange={onChange}>Checkbox</Checkbox>
                  <Link to={`/update-todo/${todo?.todoId}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handelDelete(todo?.todoId)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoCard;
