import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

function NewTodoForm({newTodo}) {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => (
            {...formData, [name]: value}
      ))
    }
  // => e vs => (e) makes no difference  
    const submitData = e => {
        e.preventDefault();
        newTodo({...formData, id: uuid()});
        setFormData('');
    };
  
    return (
        <div>
          <form onSubmit={submitData}>
            <label htmlFor="item">Item</label> 
            <input 
               id="item"
               type="text"
               name="item"
               value={formData.item}
               onChange={handleChange} />
            <button> Add a Todo </button>
          </form>
        </div>
    );
}

export default NewTodoForm;