import React from 'react';
import {Card} from "react-bootstrap";

import './country-card.css';

const CountryCard = ({data}) => {
        return (
            <Card className="bg-dark text-white grow">
                <Card.Img src={data.img}/>
                <Card.ImgOverlay>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.shortDescription}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
};

export default CountryCard;