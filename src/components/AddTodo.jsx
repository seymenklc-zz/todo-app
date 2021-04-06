import React, { useState } from 'react';
import { TextField, IconButton, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import { nanoid } from 'nanoid';
import SnackBar from './SnackBar';

const useStyles = makeStyles({
    root: {
        marginTop: 20,
    },
    btn: {
        marginTop: 25,
        marginLeft: 10,
        alignSelf: 'center',
        height: 50
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

        const todo = {
            id: nanoid(),
            body: content
        };

        addTodo(todo);
        setContent('');
    };

    return (
        <Grid container direction='column' alignItems='center'>
            <form onSubmit={handleSubmit} >
                <TextField className={classes.root} value={content} onChange={(e) => setContent(e.target.value)} label='Todo' variant='outlined' color="primary" multiline autoFocus />
                <IconButton type='submit' size='medium' color='primary' className={classes.btn}>
                    <AddBox />
                </IconButton>
            </form>
            <SnackBar open={open} setOpen={setOpen} />
        </Grid>
    );
};

export default AddTodo;