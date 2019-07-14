import React from 'react';
import {Link} from "react-router-dom";
import {Image, Media} from "react-bootstrap";
import './city-card-list.css';

const CityCardList = ({data, countyId}) => {

    const cityPhotoGallery = (photoArray) => {
        return photoArray.map(
            (el) => <Image src={el} key={el.slice(-10)} fluid/>
        )
    };

    const items = data.map(
        (el) => {
            return (
                <Media key={el.id}>
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
                        <div className="city-gallery-container">{cityPhotoGallery(el.img)}</div>
                    </Media.Body>
                </Media>
            )
        }
    );

    return <>{items}</>
};

export default CityCardList;