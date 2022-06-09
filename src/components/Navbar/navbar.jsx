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
                <a href=".navbar">
                    <p>Home</p>
                </a>
                <a href="">
                    <p>About Me</p>
                </a>
                <a href="">
                    <p>Resume</p>
                </a>
                <a href="">
                    <p>Contact Me</p>
                </a>
            </div>
        </div>
    )
}

export default Navbar;