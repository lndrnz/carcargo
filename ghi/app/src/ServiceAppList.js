import React from 'react'
import { Link } from 'react-router-dom'

class ServiceAppList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          serviceapps:[],
          isCompleted: false,
        }
    
        this.handledelete= this.handledelete.bind(this)
        this.handlefinish= this.handlefinish.bind(this)
    }


    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/serviceapps/')
        if (response.ok) {
          const data = await response.json()
          const appslist = data.service_apps.filter(app => !app.finished)
          this.setState({ serviceapps: appslist })
        }
      }  



    async handledelete(app) {
      const serviceappUrl = `http://localhost:8080/api/serviceapps/${app.id}`;
      const fetchConfig = {
        method: "delete",
        body: JSON.stringify(app),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(serviceappUrl, fetchConfig);
        if (response.ok) {
          const newServiceApp = await response.json();

        }
      const url = await fetch('http://localhost:8080/api/serviceapps/')
      if (url.ok) {
        const data = await url.json()
        this.setState({ serviceapps: data.service_apps })
      }
    
    }
    async handlefinish(app) {
      const url = (`http://localhost:8080/api/serviceapps/${app.id}/`)
      const requestOption = {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
      }
      const response = await fetch(url, requestOption)
      if (response.ok) {
        const data = await response.json()
        const app = data.service_app
        const updatedlist = [...this.state.serviceapps]
        let index = updatedlist.indexOf(app)
        updatedlist.splice(index, 1)
        this.setState({ serviceapps: updatedlist })
  
      }


    }
    render () {
        return (
            <>
            <h1>Service Appointments <Link to="new/"><button className="btn btn-primary btn-lg">Create a Service Appointment</button></Link></h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>VIN</th>
                  <th>Customer Name</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                  <th>Assigned Technician</th>
                  <th>Service Reason</th>
                  <th> </th>
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
                      <td><button onClick={() => this.handledelete(app)} type="button" className="btn btn-danger">Cancel</button>
                      <button  onClick={() => this.handlefinish(app)} type="button" className="btn btn-success">Finished</button> </td>
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