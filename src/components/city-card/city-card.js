import React from 'react';

import './city-card.css';
import {Image, Media} from "react-bootstrap";
import {Link} from "react-router-dom";
import PhotoGallery from "../photo-gallery";

const CityCard = ({cityData, countryId}) => {
    return (
        <Media className="city-card">
            <Image
                width={64}
                height={64}
                src={cityData.images[0].img}
                className="mr-3"
            />
            <Media.Body>
                <Link to={`/${countryId}/${cityData.id}`}>
                    <h5>{cityData.title}</h5>
                </Link>
                <p>{cityData.shortDescription}</p>
                Middle prices : {cityData.middlePrices}
                <PhotoGallery data={cityData.images}/>
            </Media.Body>
        </Media>
    )
};

export default CityCard;