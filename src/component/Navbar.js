import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../component/Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Services from "../Routes/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


function Navbar (){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
        <IconContext.Provider value={{ color:'black'}}>
          <nav className="navbar">
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                <
                GiRocketThruster className="navbar-icon"
                
                />
                Windows 9 - 5
               
              </Link>
              <li>
                  <h1>
                    <a class="phone-link-top" href="tel:+15109573496"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                     listStyle: 'none'
                        }}
                  >(510) 957-3496</a>
                    </h1>
                </li>

              <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}
                    >
                        Home    
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}
                    >
                        About   
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/services" className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}
                    >
                        Services  
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={closeMobileMenu}
                    >
                        Contact  
                    </NavLink>
                </li>
                
             
              </ul>

            </div>
            <ul className="faClassAndWinow">      
                
                 <li className="faClass">
                <a   href="https://www.facebook.com/Windows9to5?mibextid=9R9pXO"
                              //  style={{ fontSize: '50px', padding: '15px', color:'rgb(54, 129, 250)' }} 
                              >
                                <FontAwesomeIcon icon={faFacebook}/>
                     </a>
                </li> 
               
                <li className="window-9-5-nav">
                  <h1><a class="phone-link" href="tel:+15109573496"
                   style={{ color: 'white', 
                   textDecoration: 'none', 
                   listStyle: 'none' 
                    
                     }}> (510) 957-3496</a>
                      </h1>
                </li>
                
              </ul> 
          </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;