import React from 'react';
import {Card} from "react-bootstrap";

import './country-card.css';

const CountryCard = ({data}) => {
        return (
            <Card className="bg-dark text-white grow">
                <Card.Img src={data.img} alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        Short information about country from a base (continent, language, currency, ...).
                        Contains 1-3 lines
                    </Card.Text>
                    <Card.Text>Some additional text</Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
};

export default CountryCard;