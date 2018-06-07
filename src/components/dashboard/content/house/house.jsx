import React, { Component, Fragment } from 'react';
import ListHouse from './list/listHouse';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Paper, Grid, Typography } from '@material-ui/core';

export default class House extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Fashion House</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/houseAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListHouse/>
            </Fragment>
        );
    }
}