import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar bg-body-tertiary">
    <div className="container-xl">
      <Link className="logo" to="/">CocktailsDB</Link>
    </div>
  </nav>
  );
};

export default Navbar;

