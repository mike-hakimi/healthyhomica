import React from "react";
import '../cssComponents/Services.css';

function Services(){

    

    return (
<div  className="services">
    <div className="window">
        <h1>Window Cleaning</h1>
        <br></br>
        <img src={process.env.PUBLIC_URL + '/images/window.png'} alt="window 9 5" />
     </div>
     <h1 className="pipes">|</h1>
     <div className="gutter">
        <h1>Gutter Cleaning</h1>
        <br></br>
        <img src={process.env.PUBLIC_URL + '/images/gutter-cleaning.jpg'} alt="window 9 5" />
       
     </div>
     <h1 className="pipes">|</h1>
     <div className="solar">
        <h1>Solar Cleaning</h1>
        <br></br>
        <img src={process.env.PUBLIC_URL + '/images/solar.jpg'} alt="window 9 5" />
       
     </div>
     {/* <h1 className="pipes">|</h1> */}
     <div className="pressure-washing">
       <h1> Pressure Washing </h1>
       <h4 style={{margin: 0, padding: 0}}>Coming Soon...</h4>
       <img src={process.env.PUBLIC_URL + '/images/pressure-Washing.jpeg'} alt="window 9 5" />
     </div>
 </div>

    )
};

export default Services;