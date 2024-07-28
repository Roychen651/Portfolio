import { useRef, useEffect, useState } from "react";
import "./Skills.scss";
import { motion, useAnimation } from "framer-motion";

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
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("animate");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const handlePortfolioClick = () => {
    document.getElementById("Portfolio").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="skills"
      ref={ref}
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <motion.div className="text-container" variants={variants}>
        <p>
          I focus on improving myself and learning new <br />
          technologies to enhance my skills.
        </p>
        <hr />
      </motion.div>

      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <img src="/IMG_0172.png" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>{" "}
            Projects
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>By</motion.b> Me
          </h1>
          <motion.button
            onClick={handlePortfolioClick}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffcc00",
              color: "#000",
            }}
            whileTap={{ scale: 0.9, backgroundColor: "#ffaa00", color: "#fff" }}
          >
            WHAT I DID?
          </motion.button>
        </div>
      </motion.div>

      <motion.div className="list-container" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "Khaki", color: "black", scale: 1.1 }}
        >
          <h2>Frontend</h2>
          <div className="skills-list">
            <div className="skill-item">React Js</div>
            <div className="skill-item">React Native</div>
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">SCSS</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">IndexedDB</div>
            <div className="skill-item">Bootstrap</div>
            <div className="skill-item">Motion Framer</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "SkyBlue", color: "black", scale: 1.1 }}
        >
          <h2>Backend</h2>
          <div className="skills-list">
            <div className="skill-item">Node Js</div>
            <div className="skill-item">Express Js</div>
            <div className="skill-item">MySQL</div>
            <div className="skill-item">Postgresql</div>
            <div className="skill-item">MongoDB</div>
            <div className="skill-item">Firebase</div>
            <div className="skill-item">JWT</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black", scale: 1.1 }}
        >
          <h2>Android</h2>
          <div className="skills-list">
            <div className="skill-item">Java</div>
            <div className="skill-item">Kotlin</div>
            <div className="skill-item">Design Material</div>
            <div className="skill-item">XML</div>
            <div className="skill-item">Android Studio</div>
            <div className="skill-item">Room</div>
            <div className="skill-item">Live Data</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "coral", color: "black", scale: 1.1 }}
        >
          <h2>Others</h2>
          <div className="skills-list">
            <div className="skill-item">Git</div>
            <div className="skill-item">GitHub</div>
            <div className="skill-item">VS Code</div>
            <div className="skill-item">Postman</div>
            <div className="skill-item">Thunder Client</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">Java</div>
            <div className="skill-item">CI/CD</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
