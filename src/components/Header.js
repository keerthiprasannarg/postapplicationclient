import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          LinkUp
        </Link>
        <div className="navbar-links">
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
