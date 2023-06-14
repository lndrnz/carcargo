import React, { useState } from 'react';

const SalesPersonForm = () => {
    const [name, setName] = useState('');
    const [employee_number, setEmployeeNumber] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { name, employee_number };
        console.log(data);
    
        const personUrl = 'http://localhost:8090/api/sales_persons/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(personUrl, fetchConfig);
        if (response.ok) {
          const newPerson = await response.json();
          console.log(newPerson);
    
          setName('');
          setEmployeeNumber('');
        }
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    
    const handleEmployeeNumberChange = (event) => {
        setEmployeeNumber(event.target.value);
    };
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a Sales Person</h1>
                    <form onSubmit={handleSubmit} id="create-sales-person-form">
                    <div className="form-floating mb-3">
                        <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={handleEmployeeNumberChange} value={employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                        <label htmlFor="employee_number">Employee Number</label>
                    </div>                      
                    <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SalesPersonForm;