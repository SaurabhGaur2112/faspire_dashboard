import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitConfirm from '../../dialog/exitConfirm';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
});

class Navbar extends Component{
    render(){
        const { classes } = this.props;
        return(
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap style={{flex: 1}}>
                        {this.props.title}
                    </Typography>
                    <ExitConfirm />
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Navbar);