import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import {ServiceProvider} from "./components/service-context";
import DataService from "./services/data-service";

const dataService = new DataService();

ReactDOM.render(<Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={dataService}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));
