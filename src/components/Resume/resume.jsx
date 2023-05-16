import React,{ useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./resume.css";
import Education from "./Education/education";
import Skills from "./Skills/skills"
import Projects from "./Projects/projects";
import Positions from "./Positions/positions";
import Awards from "./Awards/awards";

function Resume() {

  const [listrenderer,setlistrenderer]=useState(0);
  const [listdynamic,setdynamic]=useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000});
  },[]);

  const list=[
    <Education/>,
    <Projects/>,
    <Skills/>,
    <Positions/>,
    <Awards/>
  ];

  return (
    <div  data-aos="fade-right" className="resume" id="resumelink">
      <div className="resume-left">
        <span className="label" onClick={()=>{setlistrenderer(0); setdynamic(false)}}><i className="fa fa-graduation-cap icon1"></i>Education</span>
        <span className="label" onClick={()=>{setlistrenderer(1)}}><i className="fa fa-calendar-times-o icon1"></i>Projects</span>
        <span className="label" onClick={()=>{setlistrenderer(2)}}><i className="fa fa-laptop icon1"></i>Skills</span>
        <span className="label" onClick={()=>{setlistrenderer(3)}}><i className="fa fa-bar-chart-o icon1"></i>Positions</span>
        <span className="label" onClick={()=>{setlistrenderer(4)}}><i className="fa fa-paint-brush icon1"></i>Awards</span>
      </div>
      <div className="resume-right">
        {list[listrenderer]}
      </div>
    </div>
  );
}

export default Resume;
