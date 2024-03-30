import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./aboutme.css";
import Buttons from "../Buttons/buttons";

function Aboutme() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-left" className="aboutme-main" id="aboutmelink">
      <div className="aboutme">
        <div className="aboutme-image">
          <img src="./assets/aboutmepic.jpeg" alt="_blank" />
        </div>
        <div className="aboutme-text">
          <div className="aboutme-uptext">
            <p>
              As a final year Electronics and Communication Engineering student
              with a keen interest in software engineering roles, I bring a
              robust foundation of knowledge coupled with practical experience
              in diverse projects. From developing a chat support system to
              crafting a personal portfolio website, and contributing to
              initiatives like Health Umbrella Foundation and SOS-Ukraine, I
              have honed my skills in problem-solving, teamwork, and project
              management. Additionally, my hands-on experience in building a
              Facebook clone showcases my proficiency in web development and
              user-centric design. Eager to leverage my technical acumen and
              passion for software engineering, I am poised to contribute
              effectively to innovative projects and drive impactful solutions
              in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="aboutme-skills">
            <p>My Professional Skills:</p>
            <ul>
              <li>HTML, CSS, Javascript</li>
              <li>PostgreSQL, MongoDB, ExpressJS, ReactJS, NodeJS</li>
              <li>C, C++</li>
              <li>Data Structures And Algorithms </li>
              <li>Git, Github, Postman, Linear</li>
            </ul>
            <p>Some Of My Achievements:</p>
            <ul>
              <li>
                Secured 7<sup>th</sup> position in Techathon 2.0 held at JECRC,
                Jaipur. Built a emergency message sending website.
              </li>
              <li>
                Secured 1<sup>st</sup> position in yellow pages event (Best
                start-up idea pitching wins the show) of Entrepreneurship Cell
                of my college.
              </li>
              <li>
                I was in the top 200 students qualifying codechef snackdown
                contest 2021.
              </li>
            </ul>
          </div>
          <Buttons className="aboutme-button" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
