import React from 'react';

class ServiceAppForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            vin: '',
            customer_name: '',
            appointment_date: '',
            appointment_time: '',
            assigned_technician: '',
            service_reason: '',
        }
        this.handleVinChange = this.handleVinChange.bind(this)
        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this)
        this.handleAppDateChange = this.handleAppDateChange.bind(this)
        this.handleAppTimeChange = this.handleAppTimeChange.bind(this)
        this.handleAssignedTechChange = this.handleAssignedTechChange.bind(this)
        this.handleServiceReasonChange = this.handleServiceReasonChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};

        console.log(data);

        const serviceappUrl = 'http://localhost:8080/api/serviceapps/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(serviceappUrl, fetchConfig);
        if (response.ok) {
          const newServiceApp = await response.json();
          console.log(newServiceApp);

          const cleared = {
            vin: '',
            customer_name: '',
            appointment_date: '',
            appointment_time: '',
            assigned_technician: '',
            service_reason: '',
          };
          this.setState(cleared);
        }
    }
    
    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    handleCustomerNameChange(event) {
        const value = event.target.value;
        this.setState({customer_name: value})
    }

    handleAppDateChange(event) {
        const value = event.target.value;
        this.setState({appointment_date: value})
    }

    handleAppTimeChange(event) {
        const value = event.target.value;
        this.setState({appointment_time: value})
    }

    handleAssignedTechChange(event) {
        const value = event.target.value;
        this.setState({assigned_technician: value})
    }

    handleServiceReasonChange(event) {
        const value = event.target.value;
        this.setState({service_reason: value})
    }



    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a new service appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-sale-record-form">                        
                        <div className="form-floating mb-3">
                            <input onChange={this.handleVinChange} value={this.state.name} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control"/>
                            <label htmlFor="vin">Vin</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleCustomerNameChange} value={this.state.name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control"/>
                            <label htmlFor="customer_name">Customer Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAppDateChange} value={this.state.name} placeholder="Appointment date" required type="text" name="appointment_date" id="appointment_date" className="form-control"/>
                            <label htmlFor="appointment_date">Appointment Date</label>
                        </div>       
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAppTimeChange} value={this.state.name} placeholder="Appointment time" required type="text" name="appointment_time" id="appointment_time" className="form-control"/>
                            <label htmlFor="appointment_time">Appointment Time</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAssignedTechChange} value={this.state.name} placeholder="Assigned technician" required type="text" name="assigned_technician" id="assigned_technician" className="form-control"/>
                            <label htmlFor="assigned_technician">Assigned Technician</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleServiceReasonChange} value={this.state.name} placeholder="Service Reason" required type="text" name="service_reason" id="service_reason" className="form-control"/>
                            <label htmlFor="service_reason">Service Reason</label>
                        </div>       
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceAppForm;