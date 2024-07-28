import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
      id: 1,
      title: "E-commerce project",
      img: "https://github.com/Roychen651/E-commerce-project/blob/main/Outside%20Sources/Screenshot%202024-07-23%20at%2017.55.05.png?raw=true",
      desc: "This project is a fully-functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse and purchase products, manage their shopping cart, register and login, and receive newsletters.",
      github: "https://github.com/Roychen651/E-commerce-project"
    },
    {
      id: 2,
      title: "Rich Note App",
      img: "https://github.com/Roychen651/Rich-Note-App-Android-Kotlin-Project/blob/master/rich%20note%20app%20picture.png?raw=true",
      desc: "This project is designed to provide a comprehensive note-taking experience, integrated with advanced features like location saving, YouTube video embedding, and Spotify link management.",
      github: "https://github.com/Roychen651/Rich-Note-App-Android-Kotlin-Project"
    },
    {
      id: 3,
      title: "Cyber Project",
      img: "https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F08%2FTop-Cybersecurity-Projects-to-Boost-the-Value-of-Your-Resume.jpg?w=1200&auto=format%2Ccompress&fit=max",
      desc: "The goal of the project is to build secure and unsecure websites and to analyze the security of the websites, The site is have front and back functionality and using PGSQL database.",
      github: "https://github.com/Roychen651/Cyber"
    },
    {
      id: 4,
      title: "Recipe App Android",
      img: "https://raw.githubusercontent.com/Roychen651/Recipes-Android-App/main/Pictures/logo%20.png",
      desc: "The main objectives of this system are: Efficient Recipe Management: Easily search and find your stored recipes by categories or ingredients. Ingredient-Based Recipe Search: Find recipes that match the ingredients you have available in your kitchen.",
      github: "https://github.com/Roychen651/Recipes-Android-App"
    },
    {
      id: 5,
      title: "Text Analysis - Machine Learning Project",
      img: "https://github.com/Roychen651/moveEase/blob/main/moveEase.png?raw=true",
      desc: "This project focuses on predicting the gender of the author based on textual content. The task involves training machine learning models to classify whether a given text is written by a male or female author. The primary metric used to evaluate the model's performance is the F1-score, taking into account both precision and recall.",
      github: "https://github.com/Roychen651/Text-Anylsis-ML"
    },
    {
      id: 6,
      title: "Real Estate - Data Science Project",
      img: "https://github.com/Roychen651/DB-Project---Real-Eastate-Investment-Portugal/blob/main/canvas.png?raw=true",
      desc: "The goal of this project is to use classification models to identify properties that are good for investment.",
      github: "https://github.com/Roychen651/DB-Project---Real-Eastate-Investment-Portugal"
    },
    {
      id: 7,
      title: "Reverse engineering and malware",
      img: "https://i0.wp.com/www.intelecis.com/wp-content/blogs.dir/743/files/2023/01/Zeus-Malware-f.png?fit=1920%2C800&ssl=1",
      desc: "The goal of the project is an investigation of the Zeus malware and its analysis.",
      github: "https://drive.google.com/drive/folders/1nLHIfwKFh2vE1puV_dn0j9jJcV8WIl-X"
    },
    {
      id: 8,
      title: "The Three Holy Funds Website",
      img: "https://github.com/Roychen651/The-Three-Holy-Funds-Balance-Calculator/blob/main/funds.png?raw=true",
      desc: "The Three Holy Funds Balance Calculator, This tool helps you balance your investment funds to meet your target allocations.",
      github: "https://github.com/Roychen651/The-Three-Holy-Funds-Balance-Calculator"
    },
    {
      id: 9,
      title: "Cost - Web Frontend Application",
      img: "https://github.com/Roychen651/Cost-WebApplication-Frontend-Project/blob/main/Cost.png?raw=true",
      desc: "This web application provides a user-friendly interface to add costs under different categories and view reports for better expense tracking. It utilizes IndexedDB for client-side storage, allowing for seamless data management even when offline.",
      github: "https://github.com/Roychen651/Cost-WebApplication-Frontend-Project"
    },
    {
      id: 10,
      title: "moveEase",
      img: "https://github.com/Roychen651/moveEase/blob/main/moveEase.png?raw=true",
      desc: "The goal of this project is to make a Prd file to a business of online movie tickets selling.",
      github: "https://github.com/Roychen651/moveEase"
    },
  ];
  

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt={item.title} />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
              <button>
                <strong>Github</strong>
                <img src="/github.png" alt="GitHub logo" className="github-logo" />
              </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;
  