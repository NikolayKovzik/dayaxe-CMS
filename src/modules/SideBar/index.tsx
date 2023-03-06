import React from "react";
import NavBar from "./components/NavBar";
import styles from "./styles/style.module.scss";
import navBaritems from "./utils/navBarItems";


function SideBar() {
  return (
    <section className={styles.sideBar}>
      <NavBar items={navBaritems} />
    </section>
  );
}

export default SideBar;
