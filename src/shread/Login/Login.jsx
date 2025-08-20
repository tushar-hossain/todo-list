import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/authContext";
import { useLocation } from "react-router";

function Login() {
  const { setUser, signInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values) => {
    signInUser(values.email, values.password)
      .then((result) => {
        setUser(result.user);
        alert("Login successful");
        navigate(location.state || "/");
      })
      .catch((error) => console.log("please try again"));
  };

  return (
    <div className="login-form">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to="">Forgot password</Link>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
