import React, { Component, Fragment } from 'react';
import AddArtists from './addArtists';
import BackButton from '../../../../buttons/backButton';
import { NavLink } from 'react-router-dom';
import { Paper, Grid, Typography } from '@material-ui/core';

export default class Add extends Component{
    render(){
        return(
            <Fragment>
                <Grid container style={{marginBottom: '20px'}}>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Add Makeup Artists</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/news">
                            <BackButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <AddArtists />
            </Fragment>
        );
    }
}