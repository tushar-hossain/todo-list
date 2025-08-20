import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayouit/RootLayout";
import Home from "../Pages/Home/Home";
import AllTodo from "../Pages/AllTodo/AllTodo";
import Login from "../shread/Login/Login";
import Register from "../shread/Register/Register";
import PrivateRoute from "../Pages/routes/PrivateRoute";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      {
        path: "all-todo",
        element: (
          <PrivateRoute>
            <AllTodo />
          </PrivateRoute>
        ),
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
]);
