import React, { useState } from "react";
import "./navbar.css";
import { FaInstagramSquare, FaYoutubeSquare,FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// React material Ui Button
import Button from '@material-ui/core/Button';

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
        <NavLink to="/">
         <h2 className="shine-effect">
            <span>D</span>ee
            <span>B</span>lurrr
          </h2>
        </NavLink>

        
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li >
              <NavLink to="/"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>Home</Button></NavLink>
            </li>

            <li className="">
              <NavLink to="/service"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500" }}>Services</Button></NavLink>
            </li>

            <li className="">
              <NavLink to="/Clearify"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>Clearify</Button></NavLink>
            </li> 
             
            <li className="">
              <NavLink to="/about"><Button variant="primary" size="large" style={{fontSize: '15px',color:"black",fontWeight:"500"}}>ABOUT</Button></NavLink>
            </li>

           
            
         

          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://www.instagram.com/" target="avishkar">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=ES1XZ-N6w3A&ab_channel=NischayMalhan"
                target="_avishkar"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=ES1XZ-N6w3A&ab_channel=NischayMalhan"
                target="_avishkar"
              >
              <FaGithub className="github" />
              
              </a>
            </li>


          

          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>


            
        </div>
      </nav>



    </>
  );
};

export default Navbar;
