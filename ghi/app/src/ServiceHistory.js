import React from 'react'

class ServiceHistoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {service_history: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/servicehistory/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ service_history: data.service_history })
        }
      }  

    render () {
        return (
            <>
            <div className="input-group">
            <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">Search</label>
            </div>
            <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
            </button>
            </div>
            <h1>Service History</h1>
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
                {this.state.service_history.map(history => {
                  return (
                    <tr key={history.id}>
                      <td>{ history.vin }</td>
                      <td>{ history.customer_name }</td>
                      <td>{ history.appointment_date }</td>
                      <td>{ history.appointment_time }</td>
                      <td>{ history.assigned_technician }</td>
                      <td>{ history.service_reason }</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            
            </>
        )        
    }
}

export default ServiceHistoryList