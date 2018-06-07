import React, { Component, Fragment } from 'react';
import ListPeople from './list/listPeople';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Paper, Grid, Typography } from '@material-ui/core';

export default class People extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Faspire People</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/peopleAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListPeople/>
            </Fragment>
        );
    }
}