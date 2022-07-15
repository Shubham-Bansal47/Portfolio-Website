import React from "react";
// import Aboutme from "../Aboutme/aboutme";
import './navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src="./assets/portfolioic1.jpg" alt="_blank" />
            </div>
            <div className="navbar-right">
                <a href=".navbar">Home</a>
                <a href="">About Me</a>
                <a href="">Resume</a>
                <a href="">Contact Me</a>
            </div>
        </div>
    )
}

export default Navbar;