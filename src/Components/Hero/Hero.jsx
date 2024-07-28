import "./Hero.scss";
import { motion } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ROY CHEN</motion.h2>
          <motion.h1 variants={textVariants}>Web And Apps Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/u/0/folders/18xQbezonFvNcJHUgTBys9o6wEQnNFsPP",
                  "_blank"
                )
              }
              whileHover={{ scale: 1.05, backgroundColor: "rebeccapurple" }}
            >
              Resume
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, backgroundColor: "rebeccapurple" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Apps Website Developer Designer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
