import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
    },
});

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant='h6' color='textPrimary' align='center' gutterBottom>Todo App</Typography>
            <Typography variant='subtitle1' color='textSecondary' align='center' gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores iusto praesentium voluptates temporibus adipisci.</Typography>
        </footer>
    );
};

export default Footer;
