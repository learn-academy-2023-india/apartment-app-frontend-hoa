import { render, screen, image } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


describe("<App />", () => {
  it("renders an image", () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    })
  it("renders an nav list", () => {
    render (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const list = screen.getByRole('link', {
      name: /contact/i})
    expect(list).toBeInTheDocument()
  })
  })
