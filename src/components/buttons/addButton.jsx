import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = () => {
    return(
        <Button size="small" variant="raised" color="secondary" className="buttonFont buttonPosition">
            Add
            <AddIcon style={{fontSize: '18px'}}/>
        </Button>
    );
}

export default AddButton;