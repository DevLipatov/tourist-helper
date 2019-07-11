import Header from "../header";
import {Route, Switch} from "react-router";
import HomePage from "../home-page";
import CountryPage from "../country-page";
import React from "react";

export const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/country/:id" render={({match}) => <CountryPage countryId={match.id}/>}/>
            </Switch>
        </div>
    )
};