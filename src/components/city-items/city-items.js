import React from 'react';
import {Image, Media} from "react-bootstrap";

import './city-items.css';

const CityItems = ({data}) => {

    const cityPhotoGallery = (photoArray) => {
        return photoArray.map(
            (el) => <Image src={el} key={el.slice(-10)} fluid/>
        )
    };

    const items = data.map(
        (el)=> {
            return (
                <Media key={el.id}>
                    <Image
                        width={64}
                        height={64}
                        className="mr-3"
                        src={el.img[0]}
                    />
                    <Media.Body>
                        <h5>{el.title}</h5>
                        <p>
                            Some information about city from base. Historical facts,
                        </p>
                        Middle prices : {el.middlePrices}
                        <div className="city-gallery-container">{cityPhotoGallery(el.img)}</div>
                    </Media.Body>
                </Media>
            )
        }
    );

    return <>{items}</>
};

export default CityItems;