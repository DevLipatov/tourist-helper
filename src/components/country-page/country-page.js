import {Breadcrumb, Button, Card, Container} from "react-bootstrap";
import React from "react";
import CountryCityList from "../country-city-list";

import './country-page.css';

export const CountryPage = ({countryData, shortInfo, match, history}) => {

    return (
        <Container>
            <Breadcrumb>
                <div>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>{match.params.id}</Breadcrumb.Item>
                </div>
                <Button variant="outline-info"
                        onClick={() => history.goBack()}>
                    Back
                </Button>
            </Breadcrumb>
            <Card>
                <Card.Img variant="top" src={shortInfo.img}/>
                <Card.Body>
                    <h3>{shortInfo.title}</h3>
                    Some country description from a base on three or four lines. Contains middle temperature
                    like a {countryData.temperature}, climate, some historical facts
                    <h4>Popular countries</h4>
                    <CountryCityList data={countryData.cities}/>
                </Card.Body>
            </Card>
        </Container>
    )
};