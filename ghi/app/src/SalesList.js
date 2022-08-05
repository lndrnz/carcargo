import React from 'react'
import { Link } from 'react-router-dom'

class SalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sales_records: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8090/api/sales_records/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ sales_records: data.sales_records })
        }
      }
      
    render () {
        return (
            <>
            <h1>Sales Records <Link to="new/"><button className="btn btn-primary btn-lg">Create a Sales Record</button></Link></h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sales Person</th>
                  <th>Employee Number</th>
                  <th>Customer</th>
                  <th>VIN</th>
                  <th>Sale Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.sales_records.map(record => {
                  return (
                    <tr key={record.id}>
                      <td>{ record.sales_person.name }</td>
                      <td>{ record.sales_person.employee_number }</td>
                      <td>{ record.customer.name }</td>
                      <td>{ record.automobile.vin }</td>
                      <td>${ record.sale_price }</td>                 
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </>
        )        
    }
}

export default SalesList