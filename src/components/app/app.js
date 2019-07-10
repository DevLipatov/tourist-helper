import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import HomePage from "../home-page";
import CountryPage from "../country-page";
import Header from "../header";
import withDataService from "../hoc/with-data-service";
import {compose} from "redux";
import {popularInfoLoaded, popularInfoLoadedError} from "../../actions";

class App extends Component {

    componentWillMount() {
        const {dataService, popularInfoLoaded} = this.props;
        dataService.getPopular()
            .then((info) => popularInfoLoaded(info))
            .catch((error) => popularInfoLoadedError(error));
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/country/:id" component={CountryPage}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = {popularInfoLoaded, popularInfoLoadedError};


export default compose(
    withDataService(),
    connect(null, mapDispatchToProps))(App);