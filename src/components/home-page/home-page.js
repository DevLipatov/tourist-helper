import React from 'react';
import {Container} from "react-bootstrap";
import HomeCarousel from "../home-carousel";
import SortingDropdown from "../sorting-dropdown";
import CountryList from '../country-list';

import './home-page.css';

const HomePage = () => {

    return (
        <Container>
            <HomeCarousel/>
            <SortingDropdown/>
            <CountryList/>
        </Container>
    )
};

export default HomePage;