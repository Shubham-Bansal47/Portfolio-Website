import React,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./education.css";

function Education(){

  useEffect(() => {
    Aos.init({ duration: 2000});
  },[]);

    return(
        <div data-aos="fade-in" className="education">
          <div className="edu-top">
            <div className="edu-left">
              <h4 className="h4class">&#9830; The LNM Institute of Information and Technology</h4>
              <h4 className="h4class">Jaipur, Rajasthan</h4>
              <span className="color1">
                Bachelor of Technology in Electronics and Communication
              </span>
            </div>
            <div className="edu-right">
              <span className="color1">2020-2024</span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="edu-mid">
            <div className="edu-left">
              <h4 className="h4class">&#9830; Shaheed Major James Thomas School</h4>
              <h4 className="h4class">Bikaner, Rajasthan</h4>
              <span className="color1">Senior Secondary Education</span>
            </div>
            <div className="edu-right">
              <span className="color1">2018-2020</span>
            </div>
          </div>
          <hr className="hrclass"/>
          <div className="edu-bottom">
            <div className="edu-left">
              <h4 className="h4class">&#9830; Bikaner Boys School</h4>
              <h4 className="h4class">Bikaner, Rajasthan</h4>
              <span className="color1">Secondary Education</span>
            </div>
            <div className="edu-right">
              <span className="color1">Till 2018</span>
            </div>
          </div>
        </div>
    )
};

export default Education;
