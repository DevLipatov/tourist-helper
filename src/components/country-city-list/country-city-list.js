import React from 'react';
import {Image, Media} from "react-bootstrap";

import './country-city-list.css';

const CountryCityList = ({data}) => {

    const cityPhotoGallery = (photoArray) => {
        return photoArray.map(
            (el) => <Image src={el} key={el.slice(-10)} fluid/>
        )
    };

    return (
        data.map(
            (el)=> {
                return (
                    <Media key={el.id}>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={el.img[0]}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{el.title}</h5>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            </p>
                            Middle prices : {data.middlePrices}
                            <div className="city-gallery-container">{cityPhotoGallery(el.img)}</div>
                        </Media.Body>
                    </Media>
                    )
            }
        )

    )
};

export default CountryCityList;