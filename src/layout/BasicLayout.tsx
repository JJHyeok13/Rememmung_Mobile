import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./bottomNavBar/bottomNavBar";

const BasicLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default BasicLayout;
