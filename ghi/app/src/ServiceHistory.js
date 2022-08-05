import React from 'react'

class ServiceHistoryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: '',
            service_history: []}
    

    this.handleVinChange=this.handleVinChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)    

    }
    
    async handleSubmit(event) {
        event.preventDefault();

        const contract = this.state.service_history.filter((service) => {return service.vin === this.state.vin})
        this.setState({service_history: contract})
    }



    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value})
      }
    
    async componentDidMount() {
        const url = 'http://localhost:8080/api/serviceapps/';

        const response = await fetch(url);
    
        if (response.ok) {
          const data = await response.json();
          this.setState({service_history: data.service_apps});
    

        }
      }
    

    
    render () {
        return (
            <>

            <h1>Service History</h1>
            <form onSubmit={this.handleSubmit}
            id="search_history">

            <div className="main-search-input-wrap">
            <div className="main-search-input fl-wrap">
            <div className="main-search-input-item">
            <input onChange={this.handleVinChange} value={this.state.vin} type="text"placeholder="Search VIN..."
            requiredtype="text" name="vin" id="vin" />
            </div>
            <button className="main-search-button">Search</button>
            </div>
            </div>
            </form>
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
                {this.state.service_history ? this.state.service_history.map(history => {
                  return (
                    <tr key={history.vin}>
                      <td>{history.vin}</td>
                      <td>{history.customer_name}</td>
                     <td>{history.appointment_date}</td>
                      <td>{history.appointment_time}</td>
                      <td>{history.assigned_technician.name}</td>
                      <td>{history.service_reason}</td>
                    </tr>
                  )
                }): null }
              </tbody>
            </table>
            
            </>
        )        
    }
}

export default ServiceHistoryList