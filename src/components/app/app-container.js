import React, {Component} from 'react';
import {connect} from 'react-redux';
import withDataService from "../hoc/with-data-service";
import {compose} from "redux";
import {popularInfoLoaded, popularInfoLoadedError, shortInfoLoaded} from "../../actions";
import {App} from "./app";

class AppContainer extends Component {

    componentWillMount() {
        const {dataService, popularInfoLoaded, shortInfoLoaded} = this.props;
        dataService.getPopular()
            .then((info) => {
                shortInfoLoaded(info);
                popularInfoLoaded(info)
            })
            .catch((error) => popularInfoLoadedError(error));
    }

    render() {
        return <App/>
    }
}

const mapDispatchToProps = {popularInfoLoaded, popularInfoLoadedError, shortInfoLoaded};

export default compose(withDataService(), connect(null, mapDispatchToProps))(AppContainer);