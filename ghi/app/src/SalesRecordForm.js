import React from 'react';

class SalesRecordForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            automobile: '',
            automobiles: [],
            sales_person: '',
            sales_people: [],
            customer: '',
            customers: [],
            sale_price: '',
        }
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this)
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handleSalePriceChange = this.handleSalePriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.automobiles
        delete data.sales_people
        delete data.customers
        data.automobile_id = data.automobile
        data.sales_person_id = data.sales_person
        data.customer_id = data.customer
        delete data.automobile
        delete data.sales_person
        delete data.customer
        console.log(data);

        const recordUrl = 'http://localhost:8090/api/sales_records/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(recordUrl, fetchConfig);
        if (response.ok) {
          const newRecord = await response.json();
          console.log(newRecord);

          const cleared = {
            automobile: '',
            sales_person: '',
            customer: '',
            sale_price: '',
          };
          this.setState(cleared);
        }
    }
    
    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value})
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handleSalePriceChange(event) {
        const value = event.target.value;
        this.setState({sale_price: value})
    }

    async componentDidMount() {
        const autoURL = 'http://localhost:8100/api/automobiles/';    
        const response = await fetch(autoURL);

        const salesURL = 'http://localhost:8090/api/sales_records/';
        const salesResponse = await fetch(salesURL)
    
        if (response.ok && salesResponse.ok) {
          const data = await response.json();
          console.log("autos data:", data)
          console.log("autos data.autos:", data.autos)

          const salesData = await salesResponse.json();
          console.log("sales data:", salesData)
          console.log("sales data.sales_records:", salesData.sales_records)

          let autoVINs = []
          for (let auto of data.autos) {
            autoVINs.push(auto.vin)
          }

          console.log("autoVINs:", autoVINs)

          let salesVINs = []
          for (let sale of salesData.sales_records) {
            salesVINs.push(sale.automobile.vin)
          }

          console.log("salesVINs:", salesVINs)

          let unSoldCars = []
          let soldCars = []

          for (let vin of autoVINs) {
            if (salesVINs.includes(vin)) {
                soldCars.push(vin)
            } else {
                unSoldCars.push(vin)
            }
          }

          console.log("soldCars:", soldCars)
          console.log("unSoldCars:", unSoldCars)

          let returnList = []
          for (let car of data.autos) {
            if (unSoldCars.includes(car.vin)) {
                returnList.push(car)
            }
          }
          console.log("returnList:", returnList)

          this.setState({automobiles: returnList}); 
        }

        const salesmanURL = 'http://localhost:8090/api/sales_persons/';    
        const response2 = await fetch(salesmanURL);
    
        if (response2.ok) {
          const data = await response2.json();
          this.setState({sales_people: data.sales_people});
        }

        const custURL = 'http://localhost:8090/api/customers/';    
        const response3 = await fetch(custURL);
    
        if (response3.ok) {
          const data = await response3.json();
          this.setState({customers: data.customers});
        }
      }

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a sales record</h1>
                        <form onSubmit={this.handleSubmit} id="create-sale-record-form">                        
                        <div className="mb-3">
                            <select onChange={this.handleAutomobileChange} value={this.state.automobile} required name="automobile" id="automobile" className="form-select">
                            <option value="">Choose an automobile</option>
                            {this.state.automobiles.map(auto => {
                                return (
                                    <option key={auto.id} value={auto.id}>
                                    {auto.model.manufacturer.name} / {auto.model.name} / {auto.vin}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleSalesPersonChange} value={this.state.sales_person} required name="sales_person" id="sales_person" className="form-select">
                            <option value="">Choose a sales person</option>
                            {this.state.sales_people.map(person => {
                                return (
                                    <option key={person.id} value={person.id}>
                                    {person.name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={this.handleCustomerChange} value={this.state.customer} required name="customer" id="customer" className="form-select">
                            <option value="">Choose a customer</option>
                            {this.state.customers.map(person => {
                                return (
                                    <option key={person.id} value={person.id}>
                                    {person.name}
                                    </option>
                                )
                            })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleSalePriceChange} value={this.state.sale_price} placeholder="Sale Price" required type="text" name="sale_price" id="sale_price" className="form-control"/>
                            <label htmlFor="sale_price">Sale Price</label>
                        </div>                        
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalesRecordForm;