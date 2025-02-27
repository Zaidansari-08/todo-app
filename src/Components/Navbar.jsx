import React, { useState } from "react";
import "./Navbar.css";
const Navbar = ({searchTerm, setSearchTerm}) => {
  return (
    <nav className="nav">
      <div className="left-nav">
        <span>Mehar</span>
      </div>
      {/* Search input updates searchTerm */}
      <input
        className="nav-search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="right-nav">
        <span>Home</span>
        <span>About</span>
        <span>Contact Us</span>
      </div>
    </nav>
  );
};
export default Navbar;

