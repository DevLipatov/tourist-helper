import React from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Carousel} from "react-bootstrap";

import './home-carousel.css';

const HomeCarousel = ({history, popularInfo}) => {

    const carouselItems = popularInfo.map(
        (el) => {
            return (
                <Carousel.Item
                    onClick={() => history.push(`/country/${el.id}`)}
                    key={el.id}>
                    <img
                        className="d-block w-100"
                        src={el.img}
                        alt="First slide"
                    />
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

const mapStateToProps = ({popularInfo}) => {
    return {popularInfo}
};

export default compose(connect(mapStateToProps), withRouter)(HomeCarousel);