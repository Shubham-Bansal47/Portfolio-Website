import React from "react";
import "./projects.css";

function Projects(){
    return(
        <div className="projects">
          <div className="pro-top">
            <div className="pro-left">
              <h4 className="h4class">&#9830; SOS Ukraine</h4>
              <h4 className="h4class">* HTML, CSS, Bootstrap</h4>
              <span className="color1">
                Contributed in designing Front-End part of an emergency message sending website's prototype.
              </span>
            </div>
            <div className="pro-right">
              <span className="color1">1st July 2022 - 25th July 2022</span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="pro-mid">
            <div className="pro-left">
              <h4 className="h4class">&#9830; Personal Portfolio</h4>
              <h4 className="h4class">* HTML, CSS, Javascript, ReactJS, Bootstrap</h4>
              <span className="color1">This website is my favorite tech stack I have built till 
              now with all the custom made components and designs.</span>
            </div>
            <div className="pro-right">
              <span className="color1">1st May 2022 - 15th June 2022 </span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="pro-bottom">
            <div className="pro-left">
              <h4 className="h4class">&#9830; E-Commerce Website Design</h4>
              <h4 className="h4class">* HTML, CSS, Bootstrap</h4>
              <span className="color1">Made Front-End design of a Coffee beans selling website.</span>
            </div>
            <div className="pro-right">
              <span className="color1">1st Jan 2021 - 20th Jan 2021</span>
            </div>
          </div>
        </div>
    )
};

export default Projects;