import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"
import { BrowserRouter } from "react-router-dom"

describe("<Home />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
    render(<Home />, div)
        const gifHome = screen.getByRole("img")
            expect(gifHome).toHaveAttribute("src", "HomeGif.gif")
            expect(gifHome).toHaveAttribute("alt", "HomeGif")            
    })
})