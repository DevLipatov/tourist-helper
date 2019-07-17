import React from "react";
import {Card, Container} from "react-bootstrap";
import CityList from "../city-list";
import PageNavbar from "../page-navbar";

import './country-page.css';

const CountryPage = ({countryData}) => {

    return (
        <Container>
            <PageNavbar title={countryData.title} backLink={'/'} label={"Back to country list"}/>
            <Card>
                <Card.Img variant="top" src={countryData.img}/>
                <Card.Body>
                    {countryData.description} <br/>
                    temperature - {countryData.temperature}
                    <h4 className="popular-countries-h4">Popular countries</h4>
                    <CityList data={countryData.cities} countyId={countryData.id}/>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default CountryPage;