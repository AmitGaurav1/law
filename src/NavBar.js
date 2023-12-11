import React from 'react';
import {Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
        <nav>
        <a href="/">Home</a>
        <Link to="/Footer">About</Link>
        <Link to="/Problems">Problems</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Login">Log in/Sign up </Link>
        <div className="animation start-home"></div>
      </nav>
    </div>
  )
}
