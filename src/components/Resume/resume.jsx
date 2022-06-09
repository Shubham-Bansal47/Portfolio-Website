import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="resume-left">
        <span className="fa fa-graduation-cap icon1"></span>
        <span className="fa fa-calendar-times-o icon1"></span>
        <span className="fa fa-laptop icon1"></span>
        <span className="fa fa-bar-chart-o icon1"></span>
        <span className="fa fa-paint-brush icon1"></span>
      </div>
      <div className="resume-mid">
        <span className="label">Education</span>
        <span className="label">Work History</span>
        <span className="label">Skills</span>
        <span className="label">Projects</span>
        <span className="label">Interests</span>
      </div>
      <div className="resume-right">
        <div className="education">
          <div className="res-top">
            <div className="res-left">
              <h4>&#9830; The LNM Institute of Information and Technology</h4>
              <h4>Jaipur, Rajasthan</h4>
              <span className="color1">
                Bachelor of Technology in Electronics and Communication
              </span>
            </div>
            <div className="res-right">
              <span className="color1">2020-2024</span>
            </div>
          </div>
          <hr />
          <div className="res-mid">
            <div className="res-left">
              <h4>&#9830; Shaheed Major James Thomas School</h4>
              <h4>Bikaner, Rajasthan</h4>
              <span className="color1">Senior Secondary Education</span>
            </div>
            <div className="res-right">
              <span className="color1">2018-2020</span>
            </div>
          </div>
          <hr />
          <div className="res-bottom">
            <div className="res-left">
              <h4>&#9830; Bikaner Boys School</h4>
              <h4>Bikaner, Rajasthan</h4>
              <span className="color1">Secondary Education</span>
            </div>
            <div className="res-right">
              <span className="color1">Till 2018</span>
            </div>
          </div>
        </div>
        <div className="work-history">

        </div>
      </div>
    </div>
  );
}

export default Resume;
