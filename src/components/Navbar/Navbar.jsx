import React, { useState } from "react";

import { Squeeze as Hamburger } from "hamburger-react";
import { easeOut, motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

export const Navbar = () => {
  const links = ["home", "about", "skills", "work", "contact"];

  /* ---Hamburger Menu--- */
  const [isOpen, toggleOpen] = useState(false);

  /*---Animation for Menu */
  const navbarTransitionDefault = {
    duration: 1,
    ease: "easeOut",
  };

  const lineVariant = {
    initial: { x: "-100%" },
    animate: { x: "0" },
  };

  const navbarVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const itemVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={navbarVariant}
      transition={navbarTransitionDefault}
      className="app__navbar"
    >
      <motion.hr
        variants={lineVariant}
        transition={{ ...navbarTransitionDefault, delay: 0.2 }}
        className="app__navbar-line"
      ></motion.hr>

      <ul className="app__navbar-links">
        {links.map((item, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            variants={itemVariant}
            transition={{
              ...navbarTransitionDefault,
              delay: 0.5 + index * 0.3,
            }}
            className="app__flex"
            key={`link-${item}`}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <Hamburger
          size={24}
          color="#fff"
          duration={0.5}
          toggled={isOpen}
          toggle={toggleOpen}
        />

        <motion.div
          className="app__navbar-hamburger"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { x: [300, 0] },
            closed: { x: [0, 300] },
          }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <ul>
            {links.map((item) => (
              <li key={`${item}`}>
                <a
                  href={`#${item}`}
                  onClick={() => toggleOpen((isOpen) => !isOpen)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
