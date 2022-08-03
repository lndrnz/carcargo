import React from 'react';

class TechnicianForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            employee_number: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmployeeNumChange = this.handleEmployeeNumChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        console.log(data);

        const technicianUrl = 'http://localhost:8080/api/technician/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
          const newTechnician = await response.json();
          console.log(newTechnician);

          const cleared = {
            name: '',
            employee_number: '',
          };
          this.setState(cleared);
        }
    }
    
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleEmployeeNumChange(event) {
        const value = event.target.value;
        this.setState({employee_number: value})
    }

    


    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new Technician</h1>
                        <form onSubmit={this.handleSubmit} id="create_technician_form">                        
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleEmployeeNumChange} value={this.state.employee_number} placeholder="Employee number" required type="text" name="employee_number" id="employee_number" className="form-control"/>
                            <label htmlFor="employee_number">Employee Number</label>
                        </div>       
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TechnicianForm;