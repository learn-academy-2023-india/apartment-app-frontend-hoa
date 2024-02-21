import React from "react";
import gifHome from '../assets/HomeGif.gif';
// import gifHome from '../assets/FullHouse.png'

const Home = () => {
  return (
    <div className="home-container">
      <img src={gifHome} alt="HomeGif" className="home-gif" />
    </div>
  )
} 

export default Home