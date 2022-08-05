import React from 'react'

class SalesPersonHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales_records: [],
            sales_records_list: [],
            sales_person: '',
        }
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
    }

    async handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})

        const response = await fetch('http://localhost:8090/api/sales_records/')
        if (response.ok) {
          const data = await response.json()

          const currentList = data.sales_records
          console.log("currentList:", currentList)

          let result = currentList.filter(person => person.sales_person.id == value)
          console.log("result", result)
          console.log("value", value)
          if (value === "") {
            this.setState({ sales_records_list: data.sales_records })
          } else {
            this.setState({ sales_records_list: result })
          }

          
        }

        
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8090/api/sales_records/')
        const response2 = await fetch('http://localhost:8090/api/sales_persons/')
        if (response.ok && response2.ok) {
          const data = await response.json()
          const data2 = await response2.json()

          this.setState({ 
            sales_records: data2.sales_people,
            sales_records_list: data.sales_records,
         })
        }
      }
      
    render () { 
        const hasSales = this.state.sales_records_list.length > 0
        let codeGroup;
        if (hasSales) {
            codeGroup = (<tbody>{this.state.sales_records_list.map(record => {                       
                return (
                <tr key={record.id}>
                  <td>{ record.sales_person.name }</td>
                  <td>{ record.customer.name }</td>
                  <td>{ record.automobile.vin }</td>
                  <td>${ record.sale_price }</td>                
                </tr>
              );                                   
        })}</tbody>)
        } else {
            codeGroup = (<tbody>
                            <tr><td colSpan={4}>Sales person has no recorded sales.</td></tr>
                        </tbody>)
        }
        
        return (
            <>
            <h1>Sales Person History</h1>                     
                <div className="mb-3">
                    <select onChange={this.handleSalesPersonChange} value={this.state.sales_person} required name="sales_person" id="sales_person" className="form-select">
                    <option value="">Choose a sales person</option>
                    {this.state.sales_records.map(person => {
                        return (
                            <option key={person.id} value={person.id}>
                            {person.name}
                            </option>
                        )
                    })}
                    </select>
                </div>                                                
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sales Person</th>
                  <th>Customer</th>
                  <th>VIN</th>
                  <th>Sale Price</th>
                </tr>
              </thead>
              {codeGroup}
              {/* <tbody>
                {this.state.sales_records_list.map(record => {                       
                        return (
                        <tr key={record.id}>
                          <td>{ record.sales_person.name }</td>
                          <td>{ record.customer.name }</td>
                          <td>{ record.automobile.vin }</td>
                          <td>${ record.sale_price }</td>                
                        </tr>
                      );                                   
                })}
              </tbody> */}
            </table>
            </>
        )        
    }
}

export default SalesPersonHistory