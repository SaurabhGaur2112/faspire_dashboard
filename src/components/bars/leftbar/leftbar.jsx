import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { storeTitle, newsContent, content, sideContent } from './store';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import './leftbar.css';

const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});

class Leftbar extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Drawer 
                variant="permanent"
                classes={{paper: classes.drawerPaper}}
            >   
                <div className={classes.toolbar} />
                <List dense>
                    { storeTitle.map((value) => <NavLink to={value.link} style={{'text-decoration': 'none'}}><ListItem button key={value.id}><ListItemText primary={value.title} /></ListItem></NavLink>) }
                </List> 
                <Divider />

                <List dense>
                    { newsContent.map((value) => <NavLink to={value.link} style={{'text-decoration': 'none'}}><ListItem button key={value.id}><ListItemText primary={value.title} /></ListItem></NavLink>) }
                </List>
                <Divider />

                <List dense>
                    { content.map((value) => <NavLink to={value.link} style={{'text-decoration': 'none'}}><ListItem button key={value.id}><ListItemText primary={value.title}/></ListItem></NavLink>) }
                </List>
                <Divider />

                <List dense>
                    { sideContent.map((value) => <NavLink to={value.link} style={{'text-decoration': 'none'}}><ListItem button key={value.id}><ListItemText primary={value.title}/></ListItem></NavLink>) }
                </List>

            </Drawer>
        );
    }
}

export default withStyles(styles)(Leftbar);