import React, { Component, Fragment } from 'react';
import AddButton from '../../../buttons/addButton';
import ListNews from './list/listNews';
import '../../../../assets/css/content.css';
import { NavLink } from 'react-router-dom';

export default class News extends Component{
    render(){
        return(
            <Fragment>
                <NavLink to="/newsAdd">
                    <AddButton/><br/>
                </NavLink>
                <ListNews/>
            </Fragment>
        );
    }
}