import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ManuList = () => {
  const [manufacturers, setManufacturers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
    const response = await fetch('http://localhost:8100/api/manufacturers/');
    if (response.ok) {
      const data = await response.json()
      setManufacturers(data.manufacturers)
    }
  }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();
}, [])
  return (
<>
  <h1>Manufacturers <Link to="new/"><button className="btn btn-primary btn-lg">Create a Manufacturer</button></Link></h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
      {manufacturers.map(manu => {
        return (
          <tr key={manu.id}>
          <td>{ manu.name }</td>                 
          </tr>
          )})
      }
      </tbody>

</>
  )        
    }
export default ManuList