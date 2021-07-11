import React from 'react';

import { IconButton, CardContent, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';

const useStyles = makeStyles({
    card: {
        maxHeight: 60,
        width: 400,
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'flex-start',
        alignItems: 'center',
    }
});

const TodoCard = ({ todo, deleteTodo }) => {
    const classes = useStyles();

    return (
        <Card variant='outlined' className={classes.card}>
            <CardContent>
                <Typography variant='subtitle2' color='textSecondary'>{todo.body}</Typography>
            </CardContent>
            <IconButton className={classes.buton} onClick={() => deleteTodo(todo.id)}>
                <DeleteSweepOutlinedIcon />
            </IconButton>
        </Card>
    );
};

export default TodoCard;
