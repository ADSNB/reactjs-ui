import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Weather from './components/weather/weather';
import PageNotFound from './components/page-not-found/page-not-found';
import Home from './components/home/home';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} render={routerProps => <Home {...routerProps} />} />
            <Route path="/home" component={Home}  />
            <Route path="/weather" component={Weather}  />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);
