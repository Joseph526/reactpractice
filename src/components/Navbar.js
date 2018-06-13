import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const styles = {
  navbar: {
    background: "#329125",
    justifyContent: "flex-end"
  }
};

const Navbar = () => (
  <nav className="navbar" style={styles.navbar}>
    <a href="/">Welcome</a>
  </nav>
);

export default Navbar;
