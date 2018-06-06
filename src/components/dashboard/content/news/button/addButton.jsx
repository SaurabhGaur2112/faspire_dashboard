import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = () => {
    return(
        <Button variant="raised" color="secondary" className="buttonFont buttonPosition">
            Add
            <AddIcon />
        </Button>
    );
}

export default AddButton;