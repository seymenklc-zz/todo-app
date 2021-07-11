import React from 'react';

import { Box, Container, Typography } from '@material-ui/core';

import TodoCard from './TodoCard';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <Container>
            <Typography variant='h6' gutterBottom>Todos</Typography>
            {!todos.length ? (
                <Typography variant='h6' align='center' color='textSecondary'>
                    No todos...
                </Typography>
            ) : (
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    {todos.map(todo => <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
                </Box>
            )}
        </Container >
    );
};

export default TodoList;

