import {Button, Card, Container, Navbar} from "react-bootstrap";
import React from "react";
import CityCardList from "../city-card-list";

import './country-page.css';
import {Link} from "react-router-dom";

export const CountryPage = ({countryData}) => {

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>{countryData.title}</Navbar.Brand>
                <Link to={'/'}>
                    <Button variant="outline-info">
                        Back
                    </Button>
                </Link>
            </Navbar>
            <Card>
                <Card.Img variant="top" src={countryData.img}/>
                <Card.Body>
                    {countryData.description} <br/>
                    temperature - {countryData.temperature}
                    <h4>Popular countries</h4>
                    <CityCardList data={countryData.cities} countyId={countryData.id}/>
                </Card.Body>
            </Card>
        </Container>
    )
};