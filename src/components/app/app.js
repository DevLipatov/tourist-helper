import Header from "../header";
import {Route, Switch} from "react-router";
import HomePage from "../home-page";
import CountryPage from "../country-page";
import React from "react";
import CityPage from "../city-page";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/:id" exact render={({match}) => <CountryPage countryId={match.id}/>}/>
                <Route path="/:id/:city" render={({match}) =>
                    <CityPage
                        countryId={match.country}
                        cityId={match.city}/>
                }/>
            </Switch>
        </div>
    )
};

export default App;