import React from "react";
import {Link} from "react-router-dom";
import CountryCard from "../country-card";

import './country-list.css';

const CountryList = ({data}) => {

    const items = data.map(
        (el) => {
            return (
                <Link to={`/${el.id}`} key={el.id}>
                    <CountryCard data={el}/>
                </Link>
            )
        }
    );

    return <>{items}</>
};

export default CountryList;