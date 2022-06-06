import React from "react";
import styles  from "./Navbar.module.css"
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar" className={styles.navbar}>
      <a href="/" data-cy="navbar-home-link">Logo</a>
      <div>
        <span data-cy="navbar-cart-items-count">Cart{/* count here */}</span>
        <button data-cy="navbar-login-logout-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
