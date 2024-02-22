import React from "react"
import { useParams, NavLink as RouterNavLink } from "react-router-dom"
import '../App.css'; 
import { CardGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"


const ApartmentShow = ({ apartments }) => {
    const { id } = useParams()
    const apartment = apartments.find((item) => item.id === +id)
  
    return (
       <CardGroup>
          <Card>
            <RouterNavLink to= {`/apartmentshow/${apartment.id}`}>  
              <CardImg
              alt="listing of all apartments"
              src={apartment.image}
              top-width="100%"
              />
            </RouterNavLink>
            <CardBody>
              <CardTitle tag="h2">
                {apartment.street}
              </CardTitle>
              <CardText tag="h5">
                <h4>Unit: {apartment.unit}</h4>
              </CardText>
              <CardSubtitle
                  className="apartment-profile-pic"
                  tag="h6"
              >
                  <h4>City: {apartment.city}</h4>
              </CardSubtitle>
              <CardText tag="h5">
                <h4>State: {apartment.state}</h4>
              </CardText>
              <CardText tag="h5">
                <h4>Square Footage: {apartment.square_footage}</h4>
              </CardText>
              <CardText tag="h5">
                <h4>Price: {apartment.price}</h4>
              </CardText>
              <CardText tag="h5">
                <h4>Bedrooms: {apartment.bedrooms}</h4>
              </CardText>
              <CardText tag="h5">
                <h4>Bathrooms: {apartment.bathrooms}</h4>
              </CardText>
              <CardText tag="h5">
                <h4>Pets: {apartment.pets}</h4>
              </CardText>
            </CardBody>
          </Card>
       </CardGroup> 
      
    )
  }
  

export default ApartmentShow