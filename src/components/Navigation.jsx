import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/" className="navbar__links__style">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__links__style">
          A Propos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;