import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SigninForm extends Component{
    render(){
        return(
            <form>
                <div>
                <TextField
                    label="Email"
                    margin="normal"
                    style={{width: 300}}
                />
                </div>
                <div>
                <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    style={{width: 300}}
                />
                </div>

                <Button variant="raised" color="primary" className="signinButton">
                    SignIn
                </Button>
            </form>
        );
    }
}