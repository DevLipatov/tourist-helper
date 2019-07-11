import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

import './home-carousel.css';

export const HomeCarousel = ({popularInfo}) => {

    const carouselItems = popularInfo.map(
        (el) => {
            return (
                <Carousel.Item
                    key={el.id}>
                    <Link to={`/country/${el.id}`}>
                        <img
                            className="d-block w-100"
                            src={el.img}
                            alt="First slide"
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3>{el.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }
    );

    return (
        <Carousel>
            {carouselItems}
        </Carousel>
    )
};