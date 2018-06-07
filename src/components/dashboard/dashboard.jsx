import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../bars/navbar/navbar';
import Leftbar from '../bars/leftbar/leftbar';
import Routing from './routing';
import { HashRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 'auto',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
});

class Dashboard extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <Navbar title="Navbar" />
                <HashRouter>
                    <Fragment>
                        <Leftbar/>
                        <Routing/>
                    </Fragment>
                </HashRouter>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);