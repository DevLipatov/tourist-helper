import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import withDataService from "../hoc/with-data-service";
import {HomeCarousel} from "./home-carousel";
import {popularInfoLoaded, popularInfoLoadedError, shortInfoLoaded} from "../../actions";
import CustomSpinner from "../custom-spinner";

class HomeCarouselContainer extends Component {

    componentWillMount() {
        const {dataService, popularInfo, popularInfoLoaded, popularInfoLoadedError} = this.props;
        if (popularInfo.length === 0)
            dataService.getPopular()
                .then((info) => popularInfoLoaded(info))
                .catch((err) => popularInfoLoadedError(err));
    }

    render() {
        const {popularInfo, popularInfoLoading} = this.props;

        return (
            popularInfoLoading ? <CustomSpinner/> : <HomeCarousel popularInfo={popularInfo}/>
        )
    }
}

const mapStateToProps = ({popularInfo, popularInfoLoading}) => {
    return {popularInfo, popularInfoLoading}
};

const mapDispatchToProps = {popularInfoLoaded, shortInfoLoaded, popularInfoLoadedError};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(HomeCarouselContainer);