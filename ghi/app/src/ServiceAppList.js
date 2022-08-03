import React from 'react'

class ServiceAppList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {service_appointments: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/serviceapp/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ service_appointments: data.service_appointments })
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
                {this.state.service_appointments.map(serviceapp => {
                  return (
                    <tr key={serviceapp.id}>
                      <td>{ serviceapp.vin }</td>
                      <td>{ serviceapp.customer_name }</td>
                      <td>{ serviceapp.appointment_date }</td>
                      <td>{ serviceapp.appointment_time }</td>
                      <td>{ serviceapp.assigned_technician }</td>
                      <td>{ serviceapp.service_reason }</td>
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