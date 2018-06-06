import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SignupForm from './form/signupForm';
import './signup.css';

const Signup = () => {
    return(
        <div className="container gradient">
            <div className="row">
                <Card>
                    <CardContent>
                        <Typography>
                            Sign In
                        </Typography>
                        <SignupForm/>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Signup;