import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {countryDataLoaded, countryDataLoadedError} from "../../actions";
import withDataService from "../hoc/with-data-service";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import {CountryPage} from "./country-page";

class CountryPageContainer extends Component {

    constructor(props) {
        super(props);

        const shortInfoInGlobalState = props.shortInfo.find(
            (el) => el.title === props.match.params.name
        );

        shortInfoInGlobalState ?
            this.state = {havePageShortInfo: shortInfoInGlobalState} :
            this.state = {havePageShortInfo: null}

    }

    componentWillMount() {
        const {match, dataService, countryDataLoaded, countryDataLoadedError} = this.props;

        const countryName = match.params.name;

        const infoLoader = () => this.state.havePageShortInfo ?
            dataService.getFullInfoByName(countryName) :
            dataService.getCountryByName(countryName);

        infoLoader()
            .then((info) => countryDataLoaded(info))
            .catch((err) => countryDataLoadedError(err));
    }

    render() {
        const {match, history, countryData, countryDataLoading, countryDataError} = this.props;

        if (countryDataLoading) return <CustomSpinner/>;

        if (countryDataError) return <ErrorIndicator/>;

        const pageData = {...this.state.havePageShortInfo, ...countryData};

        return (
            <CountryPage countryData={pageData} match={match} history={history}/>
        )
    }
}

const mapStateToProps = ({shortInfo, countryData, countryDataLoading, countryDataError}) => {
    return {shortInfo, countryData, countryDataLoading, countryDataError}
};

const mapDispatchToProps = {countryDataLoaded, countryDataLoadedError};

export default compose(withRouter, withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CountryPageContainer);