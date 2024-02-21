import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} HOA </p>
        <div className="footer-links">
          <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/privacy">Privacy Policy</NavLink> | <NavLink to="/terms">Terms of Use</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer




