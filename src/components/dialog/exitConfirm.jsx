import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default class ExitConfirm extends Component{
    constructor(props){
        super(props);

        this.state = {
            open: false
        };
    }

    handleLogout = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render(){
        return(
            <div>
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    onClick={this.handleLogout}
                >
                    <i class="material-icons">
                        power_settings_new
                    </i>
                </IconButton>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleLogout}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to exit?
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleLogout} color="primary">
                            No
                        </Button>
                        <Button onClick={this.handleLogout} color="primary" autoFocus>
                            Exit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}