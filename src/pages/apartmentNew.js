import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, FormGroup, Input, Button } from "reactstrap"

const ApartmentNew = ({ createApartment }) => {
  const [apartmentFormData, setApartmentFormData] = useState({
    Street: "",
    Unit: "",
    City: "",
    State: "",
    SquareFootage: "",
    Price: "",
    Bedrooms: "",
    Bathrooms: "",
    Pets: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setApartmentFormData({ ...apartmentFormData, [e.target.name]: e.target.value });
  }

  const handleSubmit = () => {
    createApartment(apartmentFormData)
    navigate("/apartmentindex")
  }

  return (
    <>
      <h3>Add your luxury apartment to the listing:</h3>
      <br></br>
      <Form>
        <FormGroup>
          <Input
            id="street"
            name="Street"
            placeholder="Home's street address"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="unit"
            name="Unit"
            placeholder="Unit #"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="city"
            name="City"
            placeholder="City"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="state"
            name="State"
            placeholder="State"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="squareFootage"
            name="SquareFootage"
            placeholder="Home's square footage"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="price"
            name="Price"
            placeholder="Pricing"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="bedrooms"
            name="Bedrooms"
            placeholder="Bedrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="bathrooms"
            name="Bathrooms"
            placeholder="Bathrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="pets"
            name="Pets"
            placeholder="Are pets allowed?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <br></br>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default ApartmentNew;
