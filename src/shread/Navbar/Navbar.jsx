import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/authContext";

function Navbar() {
  const { user, signOutUser } = use(AuthContext);

  const handelClick = () => {
    signOutUser()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert("please try agian");
      });
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to={"/all-todo"}>
              All Todo
            </Link>
          </li>
          {user ? (
            <li>
              <button onClick={handelClick}>Log Out</button>
            </li>
          ) : (
            <li>
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
