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
        <div className="contact-mail">
            <p>Drop Me A Mail Here!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
