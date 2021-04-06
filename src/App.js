import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#14B5F6'
        }
    }
});

const App = () => {

    const [open, setOpen] = useState(false);
    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <TodoList todos={todos} deleteTodo={deleteTodo} />
                <AddTodo open={open} setOpen={setOpen} addTodo={addTodo} />
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default App;