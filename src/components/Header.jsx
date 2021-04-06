import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';

const useStyles = makeStyles({
    header: {
        fontWeight: 400,
        marginTop: '50px'
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <Container>
            <Typography className={classes.header} color='primary' variant='h2' component='h2' align='center' gutterBottom>
                Daily Todos
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
                {format(new Date(), 'do MMMM Y')}
            </Typography>
        </Container>

    );
};

export default Header;
