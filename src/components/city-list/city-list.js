import React from 'react';
import './city-list.css';
import CityCard from "../city-card";

const CityList = ({data, countyId}) => {

    const items = data.map(
        (el) => <CityCard cityData={el} countryId={countyId} key={el.id}/>
    );

    return <>{items}</>
};

export default CityList;