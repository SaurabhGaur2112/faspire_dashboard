import React, { Component, Fragment } from 'react';
import AddButton from './button/addButton';
import ListNews from './list/listNews';
import '../../../../assets/css/content.css';

export default class News extends Component{
    render(){
        return(
            <Fragment>
                <AddButton/><br/>
                <ListNews/>
            </Fragment>
        );
    }
}