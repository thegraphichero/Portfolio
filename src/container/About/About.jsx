import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
const About = () => {
  return (
    <div id="about" className="app__about app__container">
      <div className="app__about-info">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__about-bgImg"
        >
          <img src={images.FullLogo} alt="logo" />
        </motion.div>
        <div className="app__about-mainText">
          <motion.h1
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="head-text"
          >
            About me.
          </motion.h1>
          <p className="p-text app__about-miniText">
            Hi there, my name is Paramveer singh. I’m a Full Stack Developer and
            Graphic Designer based in Canada. I love Art, Tech, and Deep space
            exploration. Taking care of the smallest details is the key element
            of all my arts & crafts. My work ethics and philosophy both fit the
            <span> "A thousand no's for every yes"</span> mindset. When it comes
            to what I do, I am a strong believer of eclecticism: Finding
            inspiration and resources within a wide range of fields and
            environments is the most essential propellant for my creative
            process as well as for my growth and expansion both as an individual
            and a professional.
          </p>
          <div className="app__button app__about-button">
            <h3>
              <a href="https://docs.google.com/document/d/e/2PACX-1vTelccF6uav7cS6G3jcYe0j5CvNwow9XrM-4lP48YEkJJedCfWASii0Z5KJ_CcvBEzJ8Cnb1XHxNtPM/pub">
                <span>View Resume</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
