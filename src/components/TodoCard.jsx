import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    card: {
        display: 'flex',
        textAlign: 'flex-start',
        marginLeft: 20,
        maxHeight: 60,
        width: 400,
        justifyContent: 'space-between',
    },
    buton: {

    }
});

const TodoCard = ({ todo, deleteTodo }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2} key={todo.id}>
            <Grid item xs={12} md={12}>
                <Grid container justify="center" >
                    <Card variant='outlined' className={classes.card}>
                        <CardContent>
                            <Typography size='medium' variant='subtitle2' color='textSecondary'>
                                {todo.body}
                            </Typography>
                        </CardContent>
                        <IconButton className={classes.buton} onClick={() => deleteTodo(todo.id)}>
                            <DeleteSweepOutlinedIcon />
                        </IconButton>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TodoCard;
