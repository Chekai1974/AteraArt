import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import submited from "../../Images/Submited.png";
import { useNavigate } from "react-router-dom";
function Contact() {
  const form = useRef();
  const [show, setShow] = useState("");
  const navigator = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_agzc31x",
        "template_2egrwlm",
        form.current,
        "CNHbhDqcMZqmz4B-v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  function modalWindow() {
    setShow("show");
    setTimeout(() => {
      setShow("");
      navigator("/")
    }, 3400);
    
  }
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <p id="answer-text">
            Are you ready for the next step? Submit your inquiry below & we'll
            get back to you within 48 hours.
          </p>
          <h2>
            <span>CONTACT ME</span> <br />I LOOK FORWARD TO MEETING YOU!
          </h2>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p id="name">Name*</p>
            <input
              type="name"
              placeholder="First & Second Name"
              required
              name="user_name"
            />
            <p>Telephone*</p>
            <input
              type="text"
              name="user_tel"
              required
              placeholder="+32-433-43-44-53"
            />
            <p id="email">E-MAILADRES*</p>
            <input
              type="email"
              name="user_email"
              required
              placeholder="your.email@gmail.com"
            />
            <p id="email">INSTAGRAM (Optional)</p>
            <input
              type="text"
              name="user_inst"
              required
              placeholder="@your.inst"
            />
            <p>Topic of your Photo shoot*</p>
            <select id="select" name="user_topic" >
              <option value="Love 1">Love 1</option>
              <option value="Love 2">Love 2</option>
              <option value="Love 3">Love 3</option>
              <option value="Love 4">Love 4</option>
              <option value="Love 5">Love 5</option>
              <option value="no_topic">Yourself topic (in message)</option>
            </select>
            <p id="message">Message</p>
            <textarea name="message" id="text" cols="60" rows="10"></textarea>
            <p id="send-text">Send all just in one click!</p>
            <button
              className="send-btn style2"
              type="submit"
              onClick={() => modalWindow()}
            >
              SEND!
            </button>
          </form>
          <div className={`modal-window ${show}`}>
            <div className="window-content">
              <h1>Thanks your request was submitted</h1>
              <img src={submited} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
