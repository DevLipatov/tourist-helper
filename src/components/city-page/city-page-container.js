import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import withDataService from "../hoc/with-data-service";
import {cityDataLoaded, cityDataLoadedError} from "../../actions";
import CityPage from "./city-page";

import './city-page.css';

class CityPageContainer extends Component {

    componentWillMount() {
        const {match, countryData, dataService, cityDataLoaded, cityDataLoadedError} = this.props;
        const {country, city} = match.params;
        countryData.id === country ?
            cityDataLoaded(countryData.cities.find(el => el.id === city)) :
            dataService.getCityByCountyIdAndCityId(country, city)
                .then(data => cityDataLoaded(data))
                .catch(err => cityDataLoadedError(err))
    }

    render() {
        const {match, cityData, cityDataLoading, cityDataError} = this.props;

        return <CityPage match={match} data={cityData} loading={cityDataLoading} error={cityDataError}/>
    }
}

const mapStateToProps = ({countryData, cityData, cityDataLoading, cityDataError}) => {
    return {countryData, cityData, cityDataLoading, cityDataError}
};

const mapDispatchToProps = {cityDataLoaded, cityDataLoadedError};

export default compose(withRouter, withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CityPageContainer);