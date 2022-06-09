import React from "react";
import "./contact.css";
import Handles from "../Handles/handles";

function Contact() {
  return(
    <div className="contact">
      <div className="contact-left">
        <div className="contact-touch">
          <p>
            Get In Touch <i className="fa fa-envelope"></i>
          </p>
        </div>
        <Handles/>
        <div className="contact-mail">
            <p>!!--Drop Me A Mail--!!</p>
        </div>
        <div className="contact-image">
          <img src="./assets/email.png" alt="_blank" />
        </div>
      </div>
      <div className="contact-right">
          <div className="name">
            <span>Name!</span>
            <input type='email' placeholder="Enter Your Name"></input>
          </div>
          <div className="email">
            <span>Email!</span>
            <input type='email' placeholder="Enter Your Email"></input>
          </div>
          <div className="message">
            <span>Message!</span>
            <textarea placeholder="Type the text here"></textarea>
          </div>
          <div className="contact-click">
            <p>!!--Click Here To send an email--!!</p>
          </div>
          <div className="contact-button">
            <button>
              Send Mail
              <span className="fa fa-telegram"></span>
            </button>
          </div>
      </div>
      
    </div>
  );
}

export default Contact;
