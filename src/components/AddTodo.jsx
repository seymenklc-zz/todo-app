import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import { TextField, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';

import SnackBar from './SnackBar';

const useStyles = makeStyles({
    TextField: {
        width: '50vh',
        marginLeft: '50px'
    },
    btn: {
        marginTop: '2px'
    },
    container: {
        float: 'right',
        marginRight: '15px'
    },
    title: {
        marginLeft: '50px'
    }
});

const AddTodo = ({ addTodo, open, setOpen }) => {
    const [content, setContent] = useState('');

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!content) {
            setOpen(true);
            return;
        }

        const todo = { id: nanoid(), body: content };

        addTodo(todo);
        setContent('');
    };

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant='h6' gutterBottom>Add Todo:</Typography>
            <form onSubmit={handleSubmit} >
                <TextField
                    className={classes.TextField}
                    label='Todo'
                    variant='outlined'
                    color="primary"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <IconButton type='submit' size='medium' color='primary' className={classes.btn}>
                    <AddBox />
                </IconButton>
            </form>
            <SnackBar open={open} setOpen={setOpen} />
        </div>
    );
};

export default AddTodo;