import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import Handles from "../Handles/handles";
import Buttons from "../Buttons/buttons";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className="profile" id="profilelink">
      <div className="profile-outer">
        <div className="profile-inner-left">
          <Handles className="profile-handles" />
          <div className="profile-name">
            Hello, I am <span>SHUBHAM</span>
          </div>
          <div className="profile-skill">
            <span className="profile-skill-name">
              <h1 className="profile-skill-heading">
                <span>! Web Developer !👨‍💻</span>
                <span>! Tech Enthusiast !😀</span>
                <span>! Esports Gamer !✒️</span>
                <span>! Engineering Undergrad !👨‍🎓</span>
              </h1>
            </span>
          </div>
          <div className="profile-brief">
            <h3>Full-Stack Web Developer Enthusiast</h3>
            <span>
              Inclined towards Learning and exploring new Technology!!
            </span>
          </div>
          <Buttons />
        </div>
        <div className="profile-inner-right">
          <img src="./assets/profilepic.jpeg" alt="_blank" />
        </div>
      </div>
    </div>
  );
}

export default Home;
