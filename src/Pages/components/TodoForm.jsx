import { Button, DatePicker, Form, Input } from "antd";

const TodoForm = ({ onChange, onFinishFailed, onFinish }) => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 26 }}
        wrapperCol={{ span: 26 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            <Input />
          </Form.Item>
        </div>

        <div>
          {/* date */}
          <Form.Item
            label="Due date"
            name="date"
            rules={[{ required: true, message: "Please date input!" }]}
          >
            <DatePicker onChange={onChange} />
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
};

export default TodoForm;
