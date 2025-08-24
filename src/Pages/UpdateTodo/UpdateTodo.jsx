import { Button, DatePicker, Form, Input } from "antd";
import { useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import { getDatabase, ref, set, get, push } from "firebase/database";
import { useParams } from "react-router";

function UpdateTodo() {
  const [selectDate, setSelectDate] = useState(null);
  const [todos, setTodos] = useState([]);
  const { id } = useParams();

  console.log(todos);
  //
  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbref = ref(db, "todoDB/todos/" + id);
      const todos = await get(dbref);
      if (todos.exists()) {
        const targetObject = todos.val();
        setTodos(targetObject);
      } else {
        alert("error");
      }
    };
    fetchData();
  }, [id]);

  const onFinish = (values) => {
    values.date = selectDate;

    // over write data save firebase
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "todoDB/todo/" + id));

    set(newDocRef, values)
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
      <Form
        name="basic"
        labelCol={{ span: 26 }}
        wrapperCol={{ span: 26 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
          title: todos?.title,
          email: "default@example.com",
        }}
      >
        <div>
          {/* title */}
          <Form.Item
            label="Todo title"
            name="title"
            rules={[
              { required: true, message: "Please Enter your todo title." },
            ]}
          >
            <Input value={todos.title} />
          </Form.Item>
        </div>

        <div>
          {/* date */}
          <Form.Item
            label="Due date"
            name="date"
            rules={[{ required: true, message: "Please date input!" }]}
          >
            <DatePicker defaultValue={todos.date} onChange={onChange} />
          </Form.Item>
        </div>

        {/* submit */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UpdateTodo;
