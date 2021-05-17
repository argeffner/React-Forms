import React, { useState } from "react";
import './Todo.css';

const Todo = ({ item = "some todo",
                id = "1", 
                handleDelete, 
                update}) => {
    const [editItem, setEditItem] = useState(item);
    const [currEdit, setCurrEdit] = useState(false);

    const handleEdit = () => {
        setCurrEdit(edit => !edit)
    };

    const handleChange = (e) => {
        setEditItem(e.target.value)
    };

    const remove = () => handleDelete(id);

    const handleUpdate = (e) => {
        e.preventDefault();
        update(id, editItem);
        setCurrEdit(false);
    };

    if (currEdit) {
      return (
          <div className='Todo'>
            <form onSubmit={handleUpdate}>
              <li>
              <input type='text' value={editItem} onChange={handleChange}/>
              <button>Make Change</button>
              </li>
            </form>
          </div>
    )} else {
      return (
          <div className='Item'>
            <li>{item}</li>
            <div className="btn">
            <button onClick={handleEdit}> Edit </button>
            <button onClick={remove}>x</button>
            </div>
          </div>
    )}
}

export default Todo;