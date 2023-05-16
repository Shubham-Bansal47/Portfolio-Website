import React,{ useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./projects.css";

function Projects(){

    useEffect(() => {
      Aos.init({ duration: 2000});
    },[]);

    return(
        <div data-aos="fade-in" className="projects">
          <div className="pro-top">
            <div className="pro-left">
              <h4 className="h4class">&#9830; Health Umbrella Foundation</h4>
              <h4 className="h4class">* HTML5, CSS, Javacript, ReactJS, Python, Django</h4>
              <span className="color1">
                Lead of Frontend Team of project, Built custom designed components, Single Page application, Responsive design.
              </span>
            </div>
            <div className="pro-right">
              <span className="color1">13th March 2023 </span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="pro-mid1">
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
          <div className="pro-mid2">
            <div className="pro-left">
              <h4 className="h4class">&#9830; Personal Portfolio</h4>
              <h4 className="h4class">* HTML, CSS, Javascript, ReactJS</h4>
              <span className="color1">This website gives a brief idea about my qualification, education, Skills and projects made by me so far.</span>
            </div>
            <div className="pro-right">
              <span className="color1">1st May 2022 - 15th June 2022 </span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="pro-bottom">
            <div className="pro-left">
              <h4 className="h4class">&#9830; E-Commerce Website Design</h4>
              <h4 className="h4class">* HTML, CSS</h4>
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