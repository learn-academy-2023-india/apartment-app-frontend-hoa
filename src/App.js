import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex.js"
import ApartmentShow from "./pages/ApartmentShow.js"
import SignUp from "./pages/SignUp.js"
import SignIn from "./pages/SignIn.js"
import NotFound from "./pages/NotFound.js"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js"
import ApartmentNew from "./pages/ApartmentNew.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="/catshow" element={<ApartmentShow />} />
          <Route path="/catnew" element={<ApartmentNew />} />
          <Route path="/catedit" element={<ApartmentProtectedIndex />} />
          <Route path="/catedit" element={<SignIn />} />
          <Route path="/catedit" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;
