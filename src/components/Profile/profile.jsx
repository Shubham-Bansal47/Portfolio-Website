import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./profile.css";
import Typical from "react-typical";
import Handles from "../Handles/handles";
import Buttons from "../Buttons/buttons";

function Profile() {

  useEffect(() => {
    Aos.init({ duration: 1000});
  },[]);

  return (
    <div data-aos="fade-up" className="profile" id="profilelink">
      <div className="profile-outer">
        <div className="profile-inner-left">
          <Handles/>
          <div className="profile-name">
            Hello, I am <span>SHUBHAM</span>
          </div>
          <div className="profile-skill">
            <span className="profile-skill-name">
              <h1 className="profile-skill-heading">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 👨‍💻",
                    1000,
                    "Tech Enthusiast 😀",
                    1000,
                    "Content Writer ✒️",
                    1000,
                    "Engineering Undergrad 👨‍🎓",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
          <div className="profile-brief">
            <h3>
              Front-End Web Developer Enthusiast
            </h3>
            <span>  
              Inclined towards Learning and exploring new stuff!! 
            </span>
          </div>
          <Buttons/>
        </div>
        <div className="profile-inner-right">
          <img src="./assets/profilepic.jpg" alt="_blank" />
        </div>
      </div>
    </div>
  );
}

export default Profile;