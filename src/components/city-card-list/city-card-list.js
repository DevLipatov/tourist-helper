import React from 'react';
import {Link} from "react-router-dom";
import {Image, Media} from "react-bootstrap";
import './city-card-list.css';
import PhotoGallery from "../photo-gallery";

const CityCardList = ({data, countyId}) => {

    const items = data.map(
        (el) => {
            return (
                <Media key={el.id} className="city-card">
                    <Image
                        width={64}
                        height={64}
                        src={el.img[0]}
                        className="mr-3"
                    />
                    <Media.Body>
                        <Link to={`/${countyId}/${el.id}`}>
                            <h5>{el.title}</h5>
                        </Link>
                        <p>{el.shortDescription}</p>
                        Middle prices : {el.middlePrices}
                        <PhotoGallery data={el.img}/>
                    </Media.Body>
                </Media>
            )
        }
    );

    return <>{items}</>
};

export default CityCardList;