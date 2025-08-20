import React, { use } from "react";
import { AuthContext } from "../../Context/authContext";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({ children }) {
  const { user, isLoading } = use(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }

  return children;
}

export default PrivateRoute;
