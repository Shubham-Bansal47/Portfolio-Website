import React from "react";
import "./resume.css";

function Resume(){
  return(
    <div className="resume">
      <div className="resume-left">
        <div className="icon1">
          <i className="fa fa-graduation-cap"></i>
        </div>
        <div className="icon2">
          <i className="fa fa-calendar-times-o"></i>
        </div>
        <div className="icon3">
          <i className="fa fa-laptop"></i>
        </div>
        <div className="icon4">
          <i className="fa fa-bar-chart-o"></i>
        </div>
        <div className="icon5">
          <i className="fa fa-paint-brush"></i>
        </div>
      </div>
    </div>
  );
}

export default Resume;
