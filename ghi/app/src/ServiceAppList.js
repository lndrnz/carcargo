import React from 'react'

class ServiceAppList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {serviceapps: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/serviceapps/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ serviceapps: data.service_apps })
        }
      }  

    render () {
        return (
            <>
            <h1>Service Appointments</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Customer Name</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Assigned Technician</th>
                  <th>Service Reason</th>
                </tr>
              </thead>
              <tbody>
                {this.state.serviceapps.map(app => {
                  return (
                    <tr key={app.vin}>
                      <td>{ app.vin }</td>
                      <td>{ app.customer_name }</td>
                      <td>{ app.appointment_date }</td>
                      <td>{ app.appointment_time }</td>
                      <td>{ app.assigned_technician.name }</td>
                      <td>{ app.service_reason }</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </>
        )        
    }
}

export default ServiceAppList