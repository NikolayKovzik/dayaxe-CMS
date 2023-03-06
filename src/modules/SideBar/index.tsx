import React from "react";
import NavBar from "./components/NavBar";
import "./styles/sidebar.scss";
import navBaritems from "./utils/navBarItems";


function SideBar() {
  return (
    <section className="sidebar">
      <NavBar items={navBaritems} />
    </section>
  );
}

export default SideBar;
