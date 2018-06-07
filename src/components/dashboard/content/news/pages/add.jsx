import React, { Component, Fragment } from 'react';
import BackButton from '../../../../buttons/backButton';
import AddNews from './addNews';

export default class Add extends Component{
    render(){
        return(
            <Fragment>
                <BackButton/>
                <AddNews />
            </Fragment>
        );
    }
}