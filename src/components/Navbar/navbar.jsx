import React from "react";
import { Link } from "react-scroll";
import './navbar.css';

function Navbar(){
    
    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src="./assets/navbarpic.jpg" alt="_blank" />
                <h3>My Portfolio</h3>
            </div>
            <div className="navbar-right">
                <Link to="profilelink" spy={true} smooth={true} offset={-180} duration={300}>Home</Link> {/* offset sets scroll little up or down*/}
                <Link to="aboutmelink" spy={true} smooth={true} offset={-180} duration={300}>About Me</Link>
                <Link to="resumelink" spy={true} smooth={true} offset={-180} duration={300}>Resume</Link>
                <Link to="contactlink" spy={true} smooth={true} offset={-180} duration={300}>Contact Me</Link>
            </div>
        </div>
    )
}

export default Navbar;