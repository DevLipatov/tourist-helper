import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import CountryCard from "../country-card";
import withDataService from "../hoc/with-data-service";
import CustomSpinner from "../custom-spinner";
import ErrorIndicator from "../error-indicator";
import {shortInfoLoaded, shortInfoLoadedError} from "../../actions";

import './country-card-list.css';

const CountryCardList = ({data}) => {

    const list = data.map(
        (el) => {
            return (
                <CountryCard data={el} key={el.id}/>
            )
        }
    );

    return (
        <div>{list}</div>
    )
};

class CountryCardListContainer extends Component {

    //TODO how to update after history.push
    componentDidMount() {
        const {
            dataService,
            selectedCategory,
            shortInfoLoaded,
            shortInfoLoadedError
        } = this.props;
        dataService.getByCategory(selectedCategory)
            .then((info) => {shortInfoLoaded(info)})
            .catch((err) => shortInfoLoadedError(err))
    }

    render() {
        const {
            shortInfo,
            shortInfoLoading,
            shortInfoError,
            selectedCategory
        } = this.props;

        //TODO delete log
        console.log(`Country card list rendered with short info: and selected category:`);
        console.log(shortInfo);
        console.log(selectedCategory);

        if (shortInfoLoading) {
            return <CustomSpinner/>
        }

        if (shortInfoError) {
            return <ErrorIndicator/>
        }

        return <CountryCardList data={shortInfo}
                                className="countries"/>
    }
}

const mapStateToProps = ({
                             shortInfo, selectedCategory,
                             shortInfoLoading, shortInfoError,
                         }) => {
    return {
        shortInfo, selectedCategory,
        shortInfoLoading, shortInfoError
    }
};

const mapDispatchToProps = {shortInfoLoaded, shortInfoLoadedError};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps))(CountryCardListContainer);