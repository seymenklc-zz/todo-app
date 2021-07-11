import React, { useState, useEffect } from 'react';

import { Container } from '@material-ui/core';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';



const App = () => {
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
    const [open, setOpen] = useState(false);

    const addTodo = (todo) => setTodos([...todos, todo]);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Container>
            <Header />
            <br />
            <AddTodo open={open} setOpen={setOpen} addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Container>
    );
};

export default App;