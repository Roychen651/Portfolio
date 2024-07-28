import { useRef } from "react";
import "./Skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const handleProjectsClick = () => {
    window.open("https://github.com/Roychen651?tab=repositories", "_blank");
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on improving my skills to make better projects.</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My</motion.b> Skills
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For My</motion.b> Projects.
          </h1>
          <button onClick={handleProjectsClick}>Projects</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Frontend</h2>
          <p>React JS, React Native, HTML, CSS, SCSS, Java Script, Bootstrap, Motion Framer.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Backend</h2>
          <p>Node JS, Express JS, MongoDB, MySQL, Firebase, REST API, JWT, IndexedDB.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Android</h2>
          <p>Java, Kotlin, Design Material, Android Studio, XML, ROOM, Live Data.</p>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h2>Other</h2>
          <p>Git, GitHub, VS Code, Postman, Thunder Client, Python, CI/CD, Agile, Diagrams.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
