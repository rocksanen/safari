import React from "react";
import "../../styles/form.css";
//import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const Form = () => {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>safari@support.com</h5>
            <a href="mailto:safari@support.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="icon" />
            <h4>Send a message</h4>
            <h5>040 123 456</h5>
            <a
              href="https://api.whatsapp.com/send?phone+35840123456"
              target="_blank"
              rel="noreferrer"
            >
              Call us or leave us a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type={"text"}
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type={"email"} name="email" placeholder="email" required />
          <textarea
            name="message"
            rows={"7"}
            placeholder="Your feedback"
            required
          />
          <button type="submit" className="btn">
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
