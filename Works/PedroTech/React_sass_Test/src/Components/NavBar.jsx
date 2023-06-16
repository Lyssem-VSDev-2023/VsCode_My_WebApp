import React from "react";

import '../Styles/NavBar.css'

function NavBar() {
  return (
    <div className="links"><div className="navbar">
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a>
    </div>
    </div>
  );
}

export default NavBar;
