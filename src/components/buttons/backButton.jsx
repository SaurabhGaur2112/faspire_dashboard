import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const BackButton = () => {
    return(
        <Button size="small" variant="raised" color="secondary" className="buttonFont buttonPosition">
            <i class="material-icons">
                keyboard_backspace
            </i>
            &nbsp;Back
        </Button>
    );
}

export default BackButton;