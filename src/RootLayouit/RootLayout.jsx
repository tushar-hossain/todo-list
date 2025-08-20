import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shread/Navbar/Navbar";

function RootLayout() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default RootLayout;
