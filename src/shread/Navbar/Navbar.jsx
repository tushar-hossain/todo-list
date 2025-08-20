import React from "react";
import { Link } from "react-router";

function Navbar() {
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
          <li>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
