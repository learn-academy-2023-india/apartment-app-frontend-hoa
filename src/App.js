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
import "./App.css"
import ApartmentEdit from "./pages/ApartmentEdit.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <Header currentUser={currentUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
          <Route path="/apartmentnew" element={<ApartmentNew />} />
          <Route path="/myapartments" element={<ApartmentProtectedIndex />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;
