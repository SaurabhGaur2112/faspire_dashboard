import React, { Component, Fragment } from 'react';
import ListPhotographers from './list/listPhotographers';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Photographers extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Photographers</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/photographersAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListPhotographers/>
            </Fragment>
        );
    }
}