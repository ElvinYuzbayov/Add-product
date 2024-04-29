import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function RootLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default RootLayout;
