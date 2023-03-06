import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../modules/Header";
import SideBar from "../../modules/SideBar";
import "./styles.scss";

function Layout() {
  return (
    <>
      <Header />
      <div className="page-container">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
