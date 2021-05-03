import React from "react";
import {Card, CardDeck, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Vehicles.css";
import '../assets/css/bootstrap.min.css';

const Vehicles = (props) => {
  const { name, img, description} = props.vehicles;
  return (
<Container>
    <CardDeck>
        <Card >
            <Card.Img className="img-thumbnail" variant="top" src={img}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                    <Link to={'/'+name}>Booked Now</Link>
            </Card.Footer>
        </Card>
        </CardDeck>
</Container>
    // <div className='card'>
    //     <div className='card-body'>
    //         <img src={imgUrl} alt=""/>
    //         <h3>{title}</h3>
    //         <Link to={'/'+title}>Booked Now</Link>
    //     </div>
    // </div>
  );
};

export default Vehicles;
