import React, { Component } from 'react';
import { Home, News, Tips, Trends, House, Designers, Stylists, Actors, Models, Artists,
    Photographers, Coordinators, People, Apply, Associates, Sponsors, Profiles } from './content';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import NewsAdd from './content/news/pages/add';
import TipsAdd from './content/tips/pages/add';
import TrendsAdd from './content/trends/pages/add';
import HouseAdd from './content/trends/pages/add';
import DesignerAdd from './content/designers/pages/add';
import StylistsAdd from './content/stylists/pages/add';
import ActorsAdd from './content/actors/pages/add';
import ModelsAdd from './content/models/pages/add';
import ArtistsAdd from './content/artists/pages/add';
import PhotographersAdd from './content/photographers/pages/add';
import CoordinatorsAdd from './content/coordinators/pages/add';
import PeopleAdd from './content/people/pages/add';

const styles = theme => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0,
    },
    toolbar: theme.mixins.toolbar,
});

function Routing(props){
    const { classes } = props;
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <div>
                <Route exact path="/" component={Home} />               
                <Route path="/news" component={News} />               
                <Route path="/tips" component={Tips} />               
                <Route path="/trends" component={Trends} />               
                <Route path="/house" component={House} />               
                <Route path="/designers" component={Designers} />               
                <Route path="/stylists" component={Stylists} />               
                <Route path="/actors" component={Actors} />               
                <Route path="/models" component={Models} />               
                <Route path="/artists" component={Artists} />               
                <Route path="/photographers" component={Photographers} />               
                <Route path="/coordinators" component={Coordinators} />               
                <Route path="/people" component={People} />               
                <Route path="/apply" component={Apply} />               
                <Route path="/associates" component={Associates} />               
                <Route path="/sponsors" component={Sponsors} />               
                <Route path="/profiles" component={Profiles} />   


                <Route path="/newsAdd" component={NewsAdd} />  
                <Route path="/tipsAdd" component={TipsAdd} />    
                <Route path="/trendsAdd" component={TrendsAdd} />  
                <Route path="/houseAdd" component={HouseAdd} />         
                <Route path="/designerAdd" component={DesignerAdd} />   
                <Route path="/stylistsAdd" component={StylistsAdd} /> 
                <Route path="/actorsAdd" component={ActorsAdd} />   
                <Route path="/modelsAdd" component={ModelsAdd} />   
                <Route path="/artistsAdd" component={ArtistsAdd} />  
                <Route path="/photographersAdd" component={PhotographersAdd} />   
                <Route path="/coordinatorsAdd" component={CoordinatorsAdd} />  
                <Route path="/peopleAdd" component={PeopleAdd} />        
            </div>
        </main>
    );
}

export default withStyles(styles)(Routing);