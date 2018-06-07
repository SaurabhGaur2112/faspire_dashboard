import React, { Component, Fragment } from 'react';
import AddPeople from './addPeople';
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
                            <span style={{fontSize: '20px'}}>Add Faspire People</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/people">
                            <BackButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <AddPeople />
            </Fragment>
        );
    }
}