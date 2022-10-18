import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    const myStyle={
      backgroundImage: 
"url('https://cdn.dribbble.com/users/2016007/screenshots/15690051/media/2b034e95339e7b36226d3d40f1ffa773.gif')",
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '85vw',
      height: '97vh'
  };
  return (

    <div style={myStyle}>
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-1 fw-bold " style={{color: 'white'}}>CarCar</h1>
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
