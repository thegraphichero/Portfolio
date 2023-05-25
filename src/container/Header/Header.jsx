import React from "react";
import { motion, stagger } from "framer-motion";

import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header app__flex ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="app__header-bgimg"></div>
      </motion.div>
      <div className="app__header-info">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="app__header-mainText"
        >
          <h1 className="head-text ">
            Welcome<span>,</span>
            <br></br>
            <span>To The Graphic Hero</span>
          </h1>
          <div className="app__header-miniText">
            <p>Full Stack Developer, Web Designer and Graphic Designer</p>
            <p>Based in Canada</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
