import React, { Component, Fragment } from 'react';
import AddPhotographers from './addPhotographers';
import BackButton from '../../../../buttons/backButton';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Add extends Component{
    render(){
        return(
            <Fragment>
                <Grid container style={{marginBottom: '20px'}}>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Add Photographers</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/photographers">
                            <BackButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <AddPhotographers />
            </Fragment>
        );
    }
}