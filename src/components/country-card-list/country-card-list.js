import React from "react";
import {Link} from "react-router-dom";
import CountryCard from "../country-card";

import './country-card-list.css';

export const CountryCardList = ({data}) => {

    const list = data.map(
        (el) => {
            return (
                <Link to={`/country/${el.id}`} key={el.id}>
                    <CountryCard data={el}/>
                </Link>
            )
        }
    );

    return <div>{list}</div>
};