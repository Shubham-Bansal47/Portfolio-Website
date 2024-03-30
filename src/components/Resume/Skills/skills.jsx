import React,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./skills.css";

function Skills(){
    
    useEffect(() => {
        Aos.init({ duration: 2000});
      },[]);

    return(
        <div data-aos="fade-in" className="skills">
            <div className="skill-blocks">
                <div className="skill-left">
                    <h4 className="h4class">&#9830; Programming Languages</h4>
                    <span className="color1">
                        * C, C++
                    </span>
                </div>
                <div className="skill-right">
                    <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="skill-blocks">
                <div className="skill-left">
                    <h4 className="h4class">&#9830; Web Development</h4>
                    <span className="color1">
                        * HTML, CSS, Javascript 
                        <br></br>* PostgreSQL, MongoDB, ExpressJS, ReactJS, NodeJS
                    </span>
                </div>
                <div className="skill-right">
                    <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="skill-blocks">
                <div className="skill-left">
                    <h4 className="h4class">&#9830; Algorithmic Courses</h4>
                    <span className="color1">
                        * Data Structures and Algorithms
                    </span>
                </div>
                <div className="skill-right">
                    <span>&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="skill-blocks">
                <div className="skill-left">
                    <h4 className="h4class">&#9830; Development Tools</h4>
                    <span className="color1">
                        * Git, Github, VS Code, Postman, Linear
                    </span>
                </div>
                <div className="skill-right">
                    <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>
                </div>
            </div>
        </div>
    )
};

export default Skills;