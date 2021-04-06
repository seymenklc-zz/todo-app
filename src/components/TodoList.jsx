import React from 'react';
import { Container, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TodoCard from './TodoCard';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <Container>
            <hr />
            <br />
            {!todos.length ? <Typography variant='h6' align='center' color='textSecondary'>There are no todos left for the day!</Typography> : null}
            <Paper>
                {todos.map(todo => <TodoCard todo={todo} deleteTodo={deleteTodo} />)}
            </Paper>
        </Container>
    );
};

export default TodoList;

