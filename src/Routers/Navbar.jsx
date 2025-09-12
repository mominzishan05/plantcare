import React, { useState } from "react";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      {/* Logo (optional) */}
      <div className="logo">🌿 Plants</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/info" onClick={() => setIsOpen(false)}>Info</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
