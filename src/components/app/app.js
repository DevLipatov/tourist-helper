import React from "react";
import {Route, Switch} from "react-router";
import Header from "../header";
import HomePage from "../home-page";
import CountryPage from "../country-page";
import CityPage from "../city-page";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/:id" exact component={CountryPage}/>
                <Route path="/:country/:city" component={CityPage} />
            </Switch>
        </div>
    )
};

export default App;