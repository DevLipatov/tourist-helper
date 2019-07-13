import {Breadcrumb, Button, Card, Container} from "react-bootstrap";
import React from "react";
import CityItems from "../city-items";

import './country-page.css';

export const CountryPage = ({countryData, match, history}) => {

    return (
        <Container>
            <Breadcrumb>
                <div>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{match.params.name}</Breadcrumb.Item>
                </div>
                <Button variant="outline-info"
                        onClick={() => history.goBack()}>
                    Back
                </Button>
            </Breadcrumb>
            <Card>
                <Card.Img variant="top" src={countryData.img}/>
                <Card.Body>
                    <h3>{countryData.title}</h3>
                    Some country description from a base on three or four lines. Contains middle temperature
                    like a {countryData.temperature}, climate, some historical facts
                    <h4>Popular countries</h4>
                    <CityItems data={countryData.cities}/>
                </Card.Body>
            </Card>
        </Container>
    )
};