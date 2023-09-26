import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import GoogleMap from"../Routes/GoogleMap";
import '../cssComponents/Home.css'
function Home(){
    return (
        <div className="home">
         <img id="home-img" src={process.env.PUBLIC_URL + '/images/main.png'}
          alt="window 9 5" />
          
          <Services />
          <GoogleMap />
          <Contact />
          <About />
          <Footer />
          
        </div>
    )
};
export default Home;





