import React,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./resume.css";
import Education from "./Education/education";
import Projects from "./Projects/projects";
import Positions from "./Positions/positions";

function Resume() {

  useEffect(() => {
    Aos.init({ duration: 1000});
  },[]);

  return (
    <div  data-aos="fade-right" className="resume" id="resumelink">
      <div className="resume-left">
        <span className="label"><i className="fa fa-graduation-cap icon1"></i>Education</span>
        <span className="label"><i className="fa fa-calendar-times-o icon1"></i>Projects</span>
        <span className="label"><i className="fa fa-laptop icon1"></i>Skills</span>
        <span className="label"><i className="fa fa-bar-chart-o icon1"></i>Positions</span>
        <span className="label"><i className="fa fa-paint-brush icon1"></i>Interests</span>
      </div>
      <div className="resume-right">
        {/* <Education/> */}
        {/* <Projects/> */}
        <Positions/>
      </div>
    </div>
  );
}

export default Resume;
