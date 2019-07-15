import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {countryDataLoaded, countryDataLoadedError, setCountryDataLoading} from "../../actions";
import withDataService from "../hoc/with-data-service";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import CountryPage from "./country-page";

class CountryPageContainer extends Component {

    componentWillMount() {
        const {
            match, countryData, dataService, countryDataLoaded,
            countryDataLoadedError, setCountryDataLoading
        } = this.props;

        const haveCountryData = countryData.id === match.params.id;

        if (!haveCountryData) {
            setCountryDataLoading();
            dataService.getCountryById(match.params.id)
                .then((data) => countryDataLoaded(data))
                .catch((err) => countryDataLoadedError(err))
        }
    }

    render() {
        const {match, history, countryData, countryDataLoading, countryDataError} = this.props;

        return countryDataError ?
            <ErrorIndicator/> :
            countryDataLoading ?
                <CustomSpinner/> :
                <CountryPage countryData={countryData} match={match} history={history}/>
    }
}

const mapStateToProps = ({countryData, countryDataLoading, countryDataError}) => {
    return {countryData, countryDataLoading, countryDataError}
};

const mapDispatchToProps = {countryDataLoaded, countryDataLoadedError, setCountryDataLoading};

export default compose(withRouter, withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CountryPageContainer);