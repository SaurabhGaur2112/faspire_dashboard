import React, { Component } from 'react';
import { Home, News, Tips, Trends, House, Designers, Stylists, Actors, Models, Artists,
    Photographers, Coordinators, People, Apply, Associates, Sponsors, Profiles } from './content';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

const styles = theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

function Router(props){
    const { classes } = props;
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div>
                <Route exact path="/" component={Home} />               
                <Route exact path="/news" component={News} />               
                <Route exact path="/tips" component={Tips} />               
                <Route exact path="/trends" component={Trends} />               
                <Route exact path="/house" component={House} />               
                <Route exact path="/designers" component={Designers} />               
                <Route exact path="/stylists" component={Stylists} />               
                <Route exact path="/actors" component={Actors} />               
                <Route exact path="/models" component={Models} />               
                <Route exact path="/artists" component={Artists} />               
                <Route exact path="/photographers" component={Photographers} />               
                <Route exact path="/coordinators" component={Coordinators} />               
                <Route exact path="/people" component={People} />               
                <Route exact path="/apply" component={Apply} />               
                <Route exact path="/associates" component={Associates} />               
                <Route exact path="/sponsors" component={Sponsors} />               
                <Route exact path="/profiles" component={Profiles} />               
            </div>
        </main>
    );
}

export default withStyles(styles)(Router);