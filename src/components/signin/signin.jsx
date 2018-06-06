import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SigninForm from './form/signinForm';
import '../../assets/css/signin.css';

const Signin = () => {
    return(
        <div className="container gradient">
            <div className="row">
                <Card>
                    <CardContent>
                        <Typography>
                            Sign In
                        </Typography>
                        <SigninForm/>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Signin;