import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayouit/RootLayout";
import Home from "../Pages/Home/Home";
import AllTodo from "../Pages/AllTodo/AllTodo";
import Login from "../shread/Login/Login";
import Register from "../shread/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "all-todo", Component: AllTodo },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);
