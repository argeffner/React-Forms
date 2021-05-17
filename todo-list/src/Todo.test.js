import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Todo from './Todo';

it('renders withou crashing', () => {
    render(<Todo/>);
});

it('matches the snapshot', () => {
    const {asFragment} = render(<Todo/>);
    expect({asFragment}).toMatchSnapshot();
});

it("snapshot for editing", () => {
    const {asFragment, getByText} = render(<Todo/>);
    const editBtn = getByText("Edit");
    fireEvent.click(editBtn);
    expect(asFragment()).toMatchSnapshot();
  });

it('edits a todo on submit', () => {
    // need to make mockfunction for test
    const Mock = jest.fn();
    const {getByText} = render(<Todo update={Mock}/>)
    // first hit edit button
    const editBtn = getByText("Edit");
    fireEvent.click(editBtn);
    // now make the change
    const updateBtn = getByText('Make Change')
    fireEvent.click(updateBtn);
    // now implement tohaveBeenCalled() test
    expect(Mock).toHaveBeenCalled();
});

it('deletes a todo on submit', () => {
    // need to make mockfunction for test
    const Mock = jest.fn();
    const {getByText} = render(<Todo handleDelete={Mock}/>)
    // hit delete button
    const deleteBtn = getByText("x");
    fireEvent.click(deleteBtn);
    expect(Mock).toHaveBeenCalled();
})