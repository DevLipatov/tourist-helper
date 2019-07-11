import React from 'react';
import {Card} from "react-bootstrap";
import {withRouter} from "react-router-dom";

import './country-card.css';

const CountryCard = ({data}) => {
        return (
            <Card className="bg-dark text-white grow">
                <Card.Img src={data.img} alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
};

export default withRouter(CountryCard);