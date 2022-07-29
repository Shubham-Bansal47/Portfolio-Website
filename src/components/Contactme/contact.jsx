import React, { useState } from "react";
import "./contact.css";
import Handles from "../Handles/handles";

function Contact(props) {
  const [initialname, newnameentered] = useState(""); // we took empty string in usestate becoz we will recieve a string later
  const [initialemail, newemailentered] = useState("");
  const [initialmessage, newmessageentered] = useState("");
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
  function submithandler(event) {
    event.preventDefault(); // stopping the page from reload

    const datarecordedcontact = [
      { gotname: initialname }, // making object
      { gotemail: initialemail },
      { gotmessage: initialmessage },
    ];

    // console.log(datarecorded); //getting the object in console
    props.callingcontact(datarecordedcontact);
    newnameentered(""); // initialised values of initialname and all to empty
    newemailentered("");
    newmessageentered("");
  };

  return (
    <div className="contact" id="contactlink">
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
        <form className="contact-form" onSubmit={submithandler}>
          <span>Name!</span>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={initialname}
            onChange={nameentered}
          ></input>
          {/* value sets the value to initialvalue after submit is clicked */}
          <span>Email!</span>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={initialemail}
            onChange={emailentered}
          ></input>
          {/* onchange reflects the change in input every millisecond */}
          <span>Message!</span>
          <textarea
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
