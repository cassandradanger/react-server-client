import React from 'react';
import Button from '@material-ui/core/Button';
import { Search, Call } from '@material-ui/icons';

function SubmitButton() {

    return (
        <Button variant="contained" color="primary">
            <Search color="primary" />
        </Button>
    )
}

export default SubmitButton;