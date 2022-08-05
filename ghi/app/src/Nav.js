import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/">Manufacturers</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="manufacturers/new/">Create Manufacturer</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="vehicles/">Vehicles</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="vehicles/new/">Create Vehicle</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/">Automobiles</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="automobiles/new/">Create Automobile</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="technician/">Create Service Technician</NavLink>
            </li>            
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="serviceapp/new/">Create Service Appointment</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="serviceapp/">Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="servicehistory/">Service History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sales_person/">Create Sales Person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="customer/">Create Customer</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="sales_records/new/">Create Sale Record</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="sales_records/">Sales Records</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="sales_records/history/">Sales Person History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
