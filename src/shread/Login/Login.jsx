import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-form">
      <div>
        <Form
          name="login form"
          labelCol={{ span: "8" }}
          wrapperCol={{ span: "16" }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="User Name"
            name="username"
            rules={[{ required: true, message: "Please input your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <div className="account">
            <p>Don't have an account?</p>
            <Link to={"/register"}>Register</Link>
          </div>

          <Form.Item label={null}>
            <Button type="primary" className="btn-submit" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
