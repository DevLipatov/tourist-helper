import React from 'react';
import {Container} from "react-bootstrap";
import HomeCarousel from "../home-carousel";
import SortingDropdown from "../sorting-dropdown";
import CountryCardList from '../country-card-list';

import './home-page.css';

const HomePage = () => {

    return (
        <Container>
            <HomeCarousel/>
            <SortingDropdown/>
            <CountryCardList/>
        </Container>
    )
};

export default HomePage;