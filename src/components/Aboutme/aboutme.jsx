import React from "react";
import "./aboutme.css";
import Buttons from "../Buttons/buttons";

function Aboutme() {
  return (
    <div className="aboutme-main" id="aboutmelink">
      <div className="aboutme">
        <div className="aboutme-image">
          <img src="./assets/aboutmepic.jpeg" alt="_blank" />
        </div>
        <div className="aboutme-text">
          <div className="aboutme-uptext">
            <p>
              I am an Engineering Undergraduate studing in The LNM Institute of
              Information Technology, Jaipur.I am more tilted towards the tech
              world with handful experience on web development and had made
              significant advancement with some amazing projects based on
              Front-End frameworks which includes and SOS message sending website, E-Commerce Coffee Website,
              Personal Portfolio and many more.
            </p>
          </div>
          <div className="aboutme-skills">
            <p>Some Of My Professional Skills:</p>
            <ul>
              <li>HTML, CSS Javascript, Bootstrap</li>
              <li>C, C++</li>
              <li>Data Structures And Algorithms </li>
              <li>React JS</li>
              <li>Git, Github</li>
            </ul>
            <p>Some Of My Achievements:</p>
            <ul>
              <li>
                Secured 1<sup>st</sup> position in yellow pages event (Best
                start-up idea pitching wins the show) of Entrepreneurship Cell
                of my college.
              </li>
              <li>
                I was in the top 200 students qualifying codechef smackdown
                contest 2021.
              </li>
            </ul>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
