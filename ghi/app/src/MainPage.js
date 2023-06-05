import React, { Component } from 'react';
import "./index.css"

class MainPage extends Component {
  render() {
  return (

    <div className="background">
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-1 fw-bold " style={{color: 'white'}}>CarCar Go</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead fw-bold" style={{color: 'white'}}>
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
    </div>
    </div>
  );
}
}
export default MainPage;
