import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css';

function NewBoxForm({makeBox}) {
  let iState = {
        width: '',
        height: '',
        backgroundColor: ''
    };
  const [formData, setFormData] = useState(iState);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(formData => (
          {...formData, [name]: value}
    ))
  }
// => e vs => (e) makes no difference  
  const submitData = e => {
      e.preventDefault();
      makeBox({...formData, id: uuid()});
      setFormData(iState);
  };

  return (
      <div>
        <form onSubmit={submitData}>
         <div className='formDiv'>
          <label htmlFor="width">Width</label>
          <input 
             id="width"
             type="text"
             name="width"
             value={formData.width}
             onChange={handleChange} />
         </div>
         <div className="formDiv">
          <label htmlFor="height">Height</label>
          <input 
             id="height"
             type="text"
             name="height"
             value={formData.height}
             onChange={handleChange} />
         </div>
         <div className="formDiv">
          <label htmlFor="backgroundColor">backgroundColor</label>
          <input 
             id="backgroundColor"
             type="text"
             name="backgroundColor"
             value={formData.backgroundColor}
             onChange={handleChange} />  
         </div>
         
          <button className="btn">Add a Box</button>
        </form>
      </div>

  )
}

export default NewBoxForm;