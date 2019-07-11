import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {countryDataLoaded, countryDataLoadedError, shortInfoLoaded, shortInfoLoadedError} from "../../actions";
import withDataService from "../hoc/with-data-service";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import {CountryPage} from "./country-page";

class CountryPageContainer extends Component {

    constructor(props) {
        super(props);
        const shortInfoInGlobalState = props.shortInfo.find((el) => el.id === props.match.params.id);
        if (shortInfoInGlobalState) {
            this.state = {singleShortInfo: shortInfoInGlobalState}
        } else {
            this.state = {singleShortInfo: null}
        }
    }

    componentWillMount() {
        const {match, dataService, countryDataLoaded, countryDataLoadedError, shortInfoLoadedError} = this.props;

        if (this.state.singleShortInfo === null) {
            dataService.getShortInfoById(match.params.id)
                .then((info) => {
                    this.setState({singleShortInfo: info})
                })
                .catch((err) => shortInfoLoadedError(err));
        }
        dataService.getCountryById(match.params.id)
            .then((info) => countryDataLoaded(info))
            .catch((err) => countryDataLoadedError(err));
    }

    render() {
        const {match, history, countryDataLoading, countryDataError, countryData} = this.props;

        const shortInfo = this.state.singleShortInfo;

        if (countryDataLoading) return <CustomSpinner/>;

        if (countryDataError) return <ErrorIndicator/>;

        return (
            <CountryPage countryData={countryData}
                         shortInfo={shortInfo}
                         match={match}
                         history={history}/>
        )
    }
}

const mapStateToProps = ({shortInfo, countryData, countryDataLoading, countryDataError}) => {
    return {shortInfo, countryData, countryDataLoading, countryDataError}
};

const mapDispatchToProps = {countryDataLoaded, countryDataLoadedError, shortInfoLoaded, shortInfoLoadedError};

export default compose(withRouter, withDataService(), connect(mapStateToProps, mapDispatchToProps)
)(CountryPageContainer);