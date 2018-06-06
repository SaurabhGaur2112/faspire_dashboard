import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './signin/signin';
import Dashboard from './dashboard/dashboard';
import PageNotFound from './error/pageNotFound';

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}