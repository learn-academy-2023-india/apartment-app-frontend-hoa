import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
      <Nav className="header-nav">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ApartmentIndex" className="nav-link">Apartment Listing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ApartmentNew" className="nav-link">New Listing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ApartmentProtectedIndex" className="nav-link">Protected Index</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/SignIn" className="nav-link">Sign In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/SignUp" className="nav-link">Sign Up</NavLink>
        </NavItem>
      </Nav>
  )
}

export default Header