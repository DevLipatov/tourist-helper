import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {HomeCarousel} from "./home-carousel";

class HomeCarouselContainer extends Component {

    render() {
        const {popularInfo} = this.props;
        return (
            <HomeCarousel popularInfo={popularInfo}/>
        )
    }
}

const mapStateToProps = ({popularInfo}) => {
    return {popularInfo}
};

export default compose(connect(mapStateToProps), withRouter)(HomeCarouselContainer);