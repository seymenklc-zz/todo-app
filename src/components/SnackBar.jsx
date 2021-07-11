import React from 'react';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const SnackBar = ({ open, setOpen }) => {
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            autoHideDuration={2000}
            open={open}
            onClose={handleClose}
        >
            <Alert severity="error">Please add todos.</Alert>
        </Snackbar>
    );
};

export default SnackBar;
