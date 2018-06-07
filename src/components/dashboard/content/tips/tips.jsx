import React, { Component, Fragment } from 'react';
import AddButton from '../../../buttons/addButton';
import ListTips from './list/listTips';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Tips extends Component{
    render(){
        return(
            <Fragment>
                 <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Fashion Tips</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/tipsAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListTips/>
            </Fragment>
        );
    }
}