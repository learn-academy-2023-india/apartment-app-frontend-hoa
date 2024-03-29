import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ apartments }) => {
  return (
    <main className="apartment-index-cards">
      {apartments?.map((apartment, index ) => (
        <Card className="apartment-card" key={apartment.id}>
          <img
            alt={`${apartment.street}`}
            src={apartment.image}
            className="apartment-image"
          />
          <CardBody>
            <CardTitle tag="h5" className="card-title">{apartment.street}</CardTitle>
            <CardSubtitle className="mb-2 text-muted card-subtitle" tag="h6">
              Price: {apartment.price}
            </CardSubtitle>
            <NavLink to={`/ApartmentShow/${apartment.id}`} className="nav-link">
              See More Details
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  )
}

export default ApartmentIndex