
import { useState } from "react";
import app from "../firebase/firebase.init";
import { getDatabase, ref, set, push } from "firebase/database";
import TodoForm from "../Pages/components/TodoForm";

function TodoList() {
  const [selectDate, setSelectDate] = useState(null);

  const onFinish = (values) => {
    values.date = selectDate;

    // data save firebase
    const db = getDatabase(app);
    const newdoc = push(ref(db, "todoDB/todos"));

    set(newdoc, values)
      .then(() => {
        alert("Data save successful");
      })
      .catch((error) => console.log(error.message));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed: ", errorInfo);
  };

  const onChange = (date, dateString) => {
    setSelectDate(dateString);
  };

  return (
    <div className="todo-form">
      <TodoForm
        onChange={onChange}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      />
    </div>
  );
}

export default TodoList;
