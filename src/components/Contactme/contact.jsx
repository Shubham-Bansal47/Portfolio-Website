import React, { useState,useRef } from "react";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import Handles from "../Handles/handles";

function Contact(props) {

  useEffect(() => {
    Aos.init({ duration: 1000});
  },[]);

  const [initialname, newnameentered] = useState(""); // we took empty string in usestate becoz we will recieve a string later
  const [initialemail, newemailentered] = useState("");
  const [initialmessage, newmessageentered] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dsgyev', 'template_ea2pujr', form.current, 'P_XpSHga7WmT8np9K')
      .then((result) => {
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      const datarecordedcontact = [
        { gotname: initialname }, // making object
        { gotemail: initialemail },
        { gotmessage: initialmessage },
      ];
      props.callingcontact(datarecordedcontact);
      newemailentered("");
      newnameentered("");
      newmessageentered("");
  };

  function nameentered(event) {
    // event is a predefined call in javascript which gets the object details entered in input
    newnameentered(event.target.value);
  };
  function emailentered(event) {
    newemailentered(event.target.value);
  };
  function messageentered(event) {
    newmessageentered(event.target.value);
  };

  return (
    <div  data-aos="fade-up" className="contact" id="contactlink">
      <div className="contact-left">
        <p className="contact-touch">
          Get In Touch <i className="fa fa-envelope"></i>
        </p>
        <Handles />
        <p>!!--Drop Me A Mail--!!</p>
        <div className="contact-image">
          <img src="./assets/emailpic.png" alt="_blank" />
        </div>
      </div>
      <div className="contact-right">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <span>Name!</span>
          <input
          name="contactname"
            type="text"
            placeholder="Enter Your Name"
            value={initialname}
            onChange={nameentered}
          ></input>
          {/* value sets the value to initialvalue after submit is clicked */}
          <span>Email!</span>
          <input
          name="contactemail"
            type="email"
            placeholder="Enter Your Email"
            value={initialemail}
            onChange={emailentered}
          ></input>
          {/* onchange reflects the change in input every millisecond */}
          <span>Message!</span>
          <textarea
          name="contactmessage"
            placeholder="Type the text here"
            value={initialmessage}
            onChange={messageentered}
          ></textarea>
          <div className="contact-button">
            <button>
              Send Mail <i className="fa fa-telegram"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
