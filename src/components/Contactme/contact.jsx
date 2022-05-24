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
            <p>!!Drop Me A Mail Here--!!</p>
        </div>
        <div className="contact-image">
          <img src="./assets/email.png" alt="_blank" />
        </div>
      </div>
      <div className="contact-right">
          <div className="name">
            <p>Name!</p>
          </div>
          <div className="contact-nameentry">
            <input type='email' placeholder="Enter Your Name"></input>
          </div>
          <div className="email">
            <p>Email!</p>
          </div>
          <div className="contact-emailentry">
            <input type='email' placeholder="Enter Your Email"></input>
          </div>
          <div className="Message">
            <p>Message!</p>
          </div>
          <div className="contact-messageentry">
            <input type='text' placeholder="Type the text here"></input>
          </div>
          <div className="contact-click">
            <p>!!Click Here To send an email--</p>
          </div>
          <div className="contact-button">
            <button>
              <p>Send Mail <i className="fa fa-telegram"></i></p>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Contact;
