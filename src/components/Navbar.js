import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar bg-body-tertiary">
    <div className="container-xl">
      <Link className="logo" to="/">CocktailsDB</Link>
      <div className="d-inline-flex p-2 menu">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

