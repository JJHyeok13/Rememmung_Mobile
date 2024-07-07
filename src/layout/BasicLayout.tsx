import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar/navBar";

const BasicLayout: React.FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
};

export default BasicLayout;
