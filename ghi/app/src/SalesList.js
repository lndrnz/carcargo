import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const SalesList = () => {
  const [sales_records, setSales_records] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/api/sales_records/')
        if (response.ok) {
          const data = await response.json()
          setSales_records(data.sales_records)
        }
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h1>Sales Records
      <Link to="new/">
        <button className="btn btn-primary btn-lg">Create a Sales Record</button>
      </Link>
    </h1>
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
        {sales_records.map(record => {
          return (
            <tr key={record.id}>
              <td>{ record.name }</td>
              <td>{ record.employee_number }</td>
              <td>{ record.customer.name }</td>
              <td>{ record.vin }</td>
              <td>${ record.sale_price }</td>                 
            </tr>
          );
        })}
      </tbody>
      </table>
    </>
  );
};

export default SalesList