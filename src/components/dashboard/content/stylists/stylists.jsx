import React, { Component, Fragment } from 'react';
import ListStylists from './list/listStylists';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Stylists extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Stylists and Bloggers</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/stylistsAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListStylists/>
            </Fragment>
        );
    }
}