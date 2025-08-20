import { Button, Form, Input } from "antd";
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/authContext";

function Register() {
  const { setUser, createUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values) => {
    createUser(values.email, values.password)
      .then((result) => {
        setUser(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => console.log(error));
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
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
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
            <p>Already have an account?</p>
            <Link to={"/login"}>Login</Link>
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

export default Register;
