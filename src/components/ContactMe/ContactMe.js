import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import imgBack from "../../../src/assets/im4.jpg";
import load1 from "../../../src/assets/load2.gif";
import ReactTypingEffect from "react-typing-effect";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import "./ContactMe.css";

const ContactMe = (props) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();

    setBool(true);
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setBanner("Please, fill all the fields!");
      setBool(false);
    } else {
      setBanner("Sending...");

      try {
        const res = await emailjs.sendForm(
          "service_lgjpcwg",
          "template_6c4t0kn",
          form.current,
          "6EaGpAN2sDH1TnxfT"
        );

        if (res.text === "OK") {
          setBanner("");
          toast.success("Your email was successfuly send!");
          setBool(false);

          setEmail("");
          setName("");
          setMessage("");
        } else {
          setBanner(res.text);
          setBool(false);
          throw new Error();
        }
      } catch (err) {
        toast.error(err.message);
        console.log(err);
      }
    }
  };

  return (
    <div className="main container" id={props.id || ""}>
      <ScreenHeading subHeading="Let's Keep In Touch" title="Contact Me" />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
     
            <ReactTypingEffect text={["Get in Touch..."]} />
          </h2>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send your message</h4>
            <img src={imgBack} alt="" />
          </div>
          <form ref={form} onSubmit={formSubmit}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="userName"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your name..."
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="userEmail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Your email..."
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Your massage..."
              value={message}
              name="userMessage"
            />

            <div className="send-btn">
              <button className="btn primary-btn" type="submit">
                Send <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="load1" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
