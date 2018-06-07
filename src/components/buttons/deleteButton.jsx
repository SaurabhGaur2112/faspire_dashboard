import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = () => {
    return(
        <IconButton><DeleteIcon className="delete_icon"/></IconButton>
    );
}

export default DeleteButton;