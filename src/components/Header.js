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
    </>
  )
}

export default Header