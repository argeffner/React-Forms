import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';


it('renders without crashing', () => {
    render(<TodoList/>)
});

it('takes a snapshot and matches', () => {
    const {asFragment} = render(<TodoList/>)
    expect( asFragment() ).toMatchSnaphot();
});

function addTodo(todoList, item="testing 123") {
    // finds the li element
    const itemInput = todoList.getByLabelText("item");
    fireEvent.change(itemInput, { target: { value: item } });
    const button = todoList.getByText("Add a Todo");
    fireEvent.click(button);
   }

it('adds a todo', () => {
    const todo = render(<TodoList/>);
    addTodo(todo);
    
    expect(todo.getByText('testing 123')).toBeInTheDocument();
    expect(todo.getByText('Edit')).toBeInTheDocument();
    expect(todo.getByText('x')).toBeInTheDocument();
})

it('edits a todo', () => {
    const todo = render(<TodoList/>);
    addTodo(todo);
    fireEvent.click(todo.getByText("Edit"));
    //shows the edit input form
    expect(todo.getByText('make change')).toBeInTheDocument();

    //change value
    const editInput = todo.getByDisplayValue("testing 123");
    fireEvent.change(editInput, { target: { value: "new" }});
    fireEvent.click(todo.getByText('make change'));

    // changed todo test
    expect(todo.getByText("new")).toBeInTheDocument();
    expect(todo.queryByText("testing 123")).not.toBeInTheDocument();
})

it('deletes a todo', () => {
    const todo = render(<TodoList/>);
    addTodo(todo);
    fireEvent.click(todo.getByText('x'));

    // deletes a todo
    expect(todo.queryByText("testing 123")).not.toBeInTheDocument();
})
