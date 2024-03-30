import React, { useState, useRef } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import Handles from "../Handles/handles";

function Contact(props) {
  const [initialname, newnameentered] = useState("");
  const [initialemail, newemailentered] = useState("");
  const [initialmessage, newmessageentered] = useState("");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState("Oops Something went wrong!!");
  const form = useRef();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [flag]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n3y70p7",
        "template_77jahm4",
        {
          to_name:"Shubham",
          from_name:initialname,
          to_email:"shubhambansal096@gmail.com",
          from_email:initialemail,
          message:initialmessage
        },
        "znpAgeCyvihPwzRCu"
      )
      .then(
        (result) => {
          setFlag(true);
          setMessage("Hurray! Mail sent successfully");
        },
        (error) => {
          setFlag(true);
        }
      );
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
  }
  function emailentered(event) {
    newemailentered(event.target.value);
  }
  function messageentered(event) {
    newmessageentered(event.target.value);
  }

  return (
    <div data-aos="fade-up" className="contact" id="contactlink">
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
            {flag ? (
              <span>{message}</span>
            ) : (
              <button>
                Send Mail <i className="fa fa-telegram"></i>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
