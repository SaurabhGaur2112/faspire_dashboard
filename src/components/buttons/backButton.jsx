import React from 'react';
import Button from '@material-ui/core/Button';

const BackButton = () => {
    return(
        <Button size="small" variant="raised" color="secondary" className="buttonFont buttonPosition">
            <i class="material-icons" style={{fontSize: '18px'}}>
                keyboard_backspace
            </i>
            &nbsp;Back
        </Button>
    );
}

export default BackButton;