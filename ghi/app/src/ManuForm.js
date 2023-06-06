import React, { useState } from 'react';

const ManuForm = () => {const [name, setName] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {name}
    const manuUrl = 'http://localhost:8100/api/manufacturers/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(manuUrl, fetchConfig);
    if (response.ok) {
      const newManu = await response.json();
      console.log(newManu);

      setName('');
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  


        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Manufacturer</h1>
                        <form onSubmit={handleSubmit} id="create-manu-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>                        
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

export default ManuForm;