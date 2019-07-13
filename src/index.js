import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./store";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundry";
import {ServiceProvider} from "./components/service-context";
import DataService from "./services/data-service";

const dataService = new DataService();

ReactDOM.render(<Provider store={store}>
        <ErrorBoundary>
            <ServiceProvider value={dataService}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
