import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

class VehicleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {vehicles: []}
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8100/api/models/')
        if (response.ok) {
          const data = await response.json()
          this.setState({ vehicles: data.models })
        }
      }  

    render () {
        return (
            <>
            <h1>Vehicle Models <Link to="new/"><button className="btn btn-primary btn-lg">Create a Vehicle</button></Link></h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Manufacturer</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {this.state.vehicles.map(vehicle => {
                  return (
                    <tr key={vehicle.id}>
                      <td>{ vehicle.name }</td>
                      <td>{ vehicle.manufacturer.name }</td>
                      <td><img src={vehicle.picture_url} width="150" height="100" alt={ vehicle.name } /></td>                 
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </>
        )        
    }
}

export default VehicleList