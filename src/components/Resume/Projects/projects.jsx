import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./projects.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-in" className="projects">
      <div className="pro-top">
        <div className="pro-left">
          <h4 className="h4class">&#9830; Health Umbrella Foundation</h4>
          <h4 className="h4class">* HTML5, CSS, Javacript, ReactJS</h4>
          <span className="color1">
            Lead of Frontend Team of project, Built custom designed components,
            Single Page application, Responsive design.
            <br />
            <a
              href="https://github.com/Shubham-Bansal47/health_umbrella_foundation_frontend"
              target="_blank"
              rel="noreferrer"
            >
              ** Github Link
            </a>
          </span>
        </div>
        <div className="pro-right">
          <span className="color1">13th March 2023 </span>
        </div>
      </div>
      <hr className="hrclass" />
      <div className="pro-mid1">
        <div className="pro-left">
          <h4 className="h4class">&#9830; Photovamps</h4>
          <h4 className="h4class">* ReactJS, NodeJS, MongoDB</h4>
          <span className="color1">
            Guide students in integrating Node.js and React.js effectively for
            building full-stack websites, fostering practical skills for modern
            web development.
            <br /> <a href="https://github.com/Shubham-Bansal47/Photovamps" target="_blank" rel="noreferrer">** Github Link</a>
          </span>
        </div>
        <div className="pro-right">
          <span className="color1">1st July 2022 - 25th July 2022</span>
        </div>
      </div>
      <hr className="hrclass" />
      <div className="pro-mid2">
        <div className="pro-left">
          <h4 className="h4class">&#9830; Personal Portfolio</h4>
          <h4 className="h4class">* HTML, CSS, Javascript, ReactJS</h4>
          <span className="color1">
            This website gives a brief idea about my qualification, education,
            Skills and projects made by me so far.
            <br />{" "}
            <a
              href="https://singular-bunny-b52e60.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              ** Link to website
            </a>
          </span>
        </div>
        <div className="pro-right">
          <span className="color1">1st May 2022 - 15th June 2022 </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
