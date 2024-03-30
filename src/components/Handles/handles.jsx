import React from "react";
import './handles.css';

function Handles(){
    return(
        <div className="profile-handles">
            <a href="https://www.instagram.com/shubham_bansal176/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/shubham-bansal-582b80236/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa fa-google-plus-square"></i>
            </a>
        </div>
    )
}

export default Handles;