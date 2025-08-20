import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthProider from "./Context/authProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProider>
      <RouterProvider router={router} />
    </AuthProider>
  </StrictMode>
);
