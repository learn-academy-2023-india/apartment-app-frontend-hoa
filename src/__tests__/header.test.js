import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

it("has clickable links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const clickableLinkHoa = screen.getByRole("link", {
    name: /HOA/i
  })
  expect(clickableLinkHoa).toBeInTheDocument()
  
  const clickableLinkB = screen.getByRole("link", {
    name: /Apartment Listing/i
  })
  expect(clickableLinkB).toBeInTheDocument()
  const clickableLinkAdd = screen.getByRole("link", {
    name: /New Listing/i
  })
  expect(clickableLinkAdd).toBeInTheDocument()
  const clickableLinkH = screen.getByRole("link", {
    name: /Protected Index/i
  })
  expect(clickableLinkH).toBeInTheDocument()
  
  const clickableLinkIn = screen.getByRole("link", {
    name: /Sign In/i
  })
  expect(clickableLinkIn).toBeInTheDocument()
  const clickableLinkUp = screen.getByRole("link", {
    name: /Sign Up/i
  })
  expect(clickableLinkUp).toBeInTheDocument()
  
})
  

export default Header