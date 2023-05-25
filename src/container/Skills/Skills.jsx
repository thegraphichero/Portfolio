import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Skills.scss";
function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type=="skills"]';

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <div id="skills" className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: [0.5] }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                ></motion.img>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
