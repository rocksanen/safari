import React from "react";
import "../../styles/form.css";
//import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
const Form = () => {
  return (
    <div id="contact">
      <h1>Ota yhteyttä</h1>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>safari@support.com</h5>
            <a href="mailto:safari@support.com">Lähetä</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="icon" />
            <h4>Lähetä viesti</h4>
            <h5>040 123 456</h5>
            <a
              href="https://api.whatsapp.com/send?phone+35840123456"
              target="_blank"
              rel="noreferrer"
            >
              Soita meille arkisin 22-06
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type={"text"}
            name="name"
            placeholder="Koko nimesi"
            required
          />
          <input type={"email"} name="email" placeholder="email" required />
          <textarea
            name="message"
            rows={"7"}
            placeholder="Tähän saa valittaa.."
            required
          />
          <button type="submit" className="btn">
            Lähetä
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
