import React, { useState } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(true);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <div id="contact" className="app__footer">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: [1] }}
          className="app__footer-section"
        >
          <h2 className="app__footer-heading head-text">Contact information</h2>
          <div className="app__footer-contactForm">
            {!isFormSubmitted ? (
              <div className="app__footer-form app__flex">
                <div className="app__flex">
                  <input
                    type="text"
                    className="p-text"
                    placeholder="Your Name"
                    value={name}
                    name="name"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <input
                    type="text"
                    className="p-text"
                    placeholder="Your Email"
                    value={email}
                    name="email"
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="app__flex">
                  <textarea
                    className="p-text"
                    placeholder="Your Message"
                    value={message}
                    name="message"
                    onChange={handleChangeInput}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="app__button"
                  onClick={handleSubmit}
                >
                  {loading ? "Sending" : "Send Message"}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="head-text">Thank you for getting in Touch </h3>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="app__footer-contactInfo app__footer-section"
        >
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@thegraphichero.com">
              contact@thegraphichero.com
            </a>
          </p>
          <h3>Phone</h3>
          <p>
            <a href="tel:+15149699972">514-969-9972</a>
          </p>
          <h3>Resume Link</h3>
          <p>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTelccF6uav7cS6G3jcYe0j5CvNwow9XrM-4lP48YEkJJedCfWASii0Z5KJ_CcvBEzJ8Cnb1XHxNtPM/pub">
              View
            </a>
          </p>
          <h3>Social</h3>
          <p>
            <div className="app__social">
              <div>
                <a href="https://twitter.com/Thegraphichero" target="_blank">
                  <BsTwitter />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/thegraphichero/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
              <div>
                <a href="https://github.com/thegraphichero" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
