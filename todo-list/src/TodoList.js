import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList () {
    const [todos, setTodos] = useState([]);
    const add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    };
    const remove = id => setTodos(todos => 
        todos.filter(todo => todo.id !== id))

    const edit = (id, updateItem) => {
        setTodos(todos => todos.map(todo =>
            todo.id === id ? {...todo, item: updateItem} : todo
        ));
    };
    const todoElements = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            item={todo.item}
            handleDelete={remove}
            update={edit}
        />
    ));

    return (
        <div>
         <NewTodoForm newTodo={add} />
         <ul>{todoElements}</ul>
        </div>
    )
}

export default TodoList;