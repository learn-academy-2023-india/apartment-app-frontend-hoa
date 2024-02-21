import React from 'react'
import { Nav } from 'reactstrap'
import { NavLink, useNavigate } from "react-router-dom";

const Header = (currentUser) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }

  return (
    <>
        <h1>Apartments Homepage</h1>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/ApartmentIndex">Apartment Listing</NavLink>
        <NavLink to="/ApartmentNew">New Listing</NavLink>
        <NavLink to="/ApartmentProtectedIndex">Protected Index</NavLink>
        <NavLink to="/SignIn">Sign In</NavLink>
        <NavLink to="/SignUp">Sign Up</NavLink>
    </>
  )
}

export default Header