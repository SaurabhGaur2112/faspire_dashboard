import React, { Component, Fragment } from 'react';
import ListArtists from './list/listArtists';
import AddButton from '../../../buttons/addButton';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

export default class Artists extends Component{
    render(){
        return(
            <Fragment>
                <Grid container>
                    <Grid item xs="11">
                        <Typography style={{marginTop: '10px'}}>
                            <span style={{fontSize: '20px'}}>Makeup Artists</span>
                        </Typography>
                    </Grid>

                    <Grid item xs="1">
                        <NavLink to="/artistsAdd">
                            <AddButton/><br/>
                        </NavLink>
                    </Grid>
                </Grid>
                <ListArtists/>
            </Fragment>
        );
    }
}