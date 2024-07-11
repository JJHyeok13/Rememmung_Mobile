import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./bottomNavBar/bottomNavBar";

const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default Layout;
