import React, { Component, Fragment } from 'react';
import ListModels from './list/listModels';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Models extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Models</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/modelsAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListModels/>
            </Fragment>
        );
    }
}