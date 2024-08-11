import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-commerce project",
    img: "https://github.com/Roychen651/E-commerce-project/blob/main/Outside%20Sources/Screenshot%202024-07-23%20at%2017.55.05.png?raw=true",
    desc: "This project is a fully-functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse and purchase products, manage their shopping cart, register and login, and receive newsletters.",
    github: "https://github.com/Roychen651/E-commerce-project",
  },
  {
    id: 2,
    title: "Rich Note App",
    img: "https://github.com/Roychen651/Rich-Note-App-Android-Kotlin-Project/blob/master/rich%20note%20app%20picture.png?raw=true",
    desc: "This project is designed to provide a comprehensive note-taking experience, integrated with advanced features like location saving, YouTube video embedding, and Spotify link management.",
    github: "https://github.com/Roychen651/Rich-Note-App-Android-Kotlin-Project",
  },
  {
    id: 3,
    title: "Coffee Beans Shop",
    img: "https://static.vecteezy.com/system/resources/previews/026/691/105/original/cup-of-art-illustrated-coffee-ai-generated-free-png.png",
    desc: "This project is a coffee beans selling website built with React. The website showcases different coffee beans products, allows users to add items to their cart, and provides an easy checkout process.",
    github: "https://github.com/Roychen651/Coffee-Shop-React-Site",
  },
  {
    id: 4,
    title: "Cyber Project",
    img: "https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F08%2FTop-Cybersecurity-Projects-to-Boost-the-Value-of-Your-Resume.jpg?w=1200&auto=format%2Ccompress&fit=max",
    desc: "The goal of the project is to build secure and unsecure websites and to analyze the security of the websites, The site is have front and back functionality and using PGSQL database.",
    github: "https://github.com/Roychen651/Cyber",
  },
  {
    id: 5,
    title: "Softwalien",
    img: "https://github.com/Roychen651/Softwalien-Landing-Page/blob/main/public/logo.png?raw=true",
    desc: "Softwalien is a modern, responsive landing page designed to showcase the features and services of a fictional web development company. The project includes dynamic sections, smooth animations, and a user-friendly interface built with React and TailwindCSS.",
    github: "https://github.com/Roychen651/Softwalien-Landing-Page",
  },
  {
    id: 6,
    title: "Weather API App",
    img: "https://www.drawhipo.com/wp-content/uploads/2023/04/Weather-Color-1-Cloudy.png",
    desc: "This application provides real-time weather updates for any city around the world. Built with React and styled for a beautiful and responsive design, it fetches weather data from the OpenWeatherMap API.",
    github: "https://github.com/Roychen651/Weather-React-API",
  },
  {
    id: 7,
    title: "Zenith and Sons Restaurant",
    img: "https://logowik.com/content/uploads/images/414_restaurant.jpg",
    desc: "This project showcases the elegance and culinary excellence of Zenith & Sons Restaurant, a modern Asian and Japanese cuisine restaurant. Built with React and Vite, the landing page features dynamic sections and smooth animations powered by Framer Motion.",
    github: "https://github.com/Roychen651?tab=repositories",
  },
  {
    id: 8,
    title: "Roy's Gym Landing Page",
    img: "https://logowik.com/content/uploads/images/fitness-club9209.logowik.com.webp",
    desc: "Welcome to the official repository for Roy's Gym landing page! This project is a modern, responsive landing page designed to showcase the features, programs, and testimonials of Roy's Gym. Built with React for the frontend, CSS Modules for styling, Framer Motion for animations, and React Scroll for smooth navigation. Deployed on Netlify for a seamless live preview experience.",
    github: "https://github.com/Roychen651/Gym-React-Landing-Page",
  },
  {
    id: 9,
    title: "Shoey Shop",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a8d6f147600267.62c57f3eafb72.png",
    desc: "Welcome to Shoey Shop! This is an online store where you can browse and purchase the latest and most popular shoes. The website is designed with a modern and responsive layout, ensuring a great user experience across all devices.",
    github: "https://github.com/Roychen651/Nike-TailwindCSS-Site",
  },
  {
    id: 10,
    title: "Recipe App Android",
    img: "https://raw.githubusercontent.com/Roychen651/Recipes-Android-App/main/Pictures/logo%20.png",
    desc: "The main objectives of this system are: Efficient Recipe Management: Easily search and find your stored recipes by categories or ingredients. Ingredient-Based Recipe Search: Find recipes that match the ingredients you have available in your kitchen.",
    github: "https://github.com/Roychen651/Recipes-Android-App",
  },
  {
    id: 11,
    title: "Text Analysis - Machine Learning Project",
    img: "https://cdn-icons-png.flaticon.com/512/2980/2980560.png",
    desc: "This project focuses on predicting the gender of the author based on textual content. The task involves training machine learning models to classify whether a given text is written by a male or female author. The primary metric used to evaluate the model's performance is the F1-score, taking into account both precision and recall.",
    github: "https://github.com/Roychen651/Text-Anylsis-ML",
  },
  {
    id: 12,
    title: "Real Estate - Data Science Project",
    img: "https://github.com/Roychen651/DB-Project---Real-Eastate-Investment-Portugal/blob/main/canvas.png?raw=true",
    desc: "The goal of this project is to use classification models to identify properties that are good for investment.",
    github: "https://github.com/Roychen651/DB-Project---Real-Eastate-Investment-Portugal",
  },
  {
    id: 13,
    title: "Reverse engineering and malware",
    img: "https://i0.wp.com/www.intelecis.com/wp-content/blogs.dir/743/files/2023/01/Zeus-Malware-f.png?fit=1920%2C800&ssl=1",
    desc: "The goal of the project is an investigation of the Zeus malware and its analysis.",
    github: "https://drive.google.com/drive/folders/1nLHIfwKFh2vE1puV_dn0j9jJcV8WIl-X",
  },
  {
    id: 14,
    title: "The Three Holy Funds Website",
    img: "https://github.com/Roychen651/The-Three-Holy-Funds-Balance-Calculator/blob/main/funds.png?raw=true",
    desc: "The Three Holy Funds Balance Calculator, This tool helps you balance your investment funds to meet your target allocations.",
    github: "https://github.com/Roychen651/The-Three-Holy-Funds-Balance-Calculator",
  },
  {
    id: 15,
    title: "Cost - Web Frontend Application",
    img: "https://github.com/Roychen651/Cost-WebApplication-Frontend-Project/blob/main/Cost.png?raw=true",
    desc: "This web application provides a user-friendly interface to add costs under different categories and view reports for better expense tracking. It utilizes IndexedDB for client-side storage, allowing for seamless data management even when offline.",
    github: "https://github.com/Roychen651/Cost-WebApplication-Frontend-Project",
  },
  {
    id: 16,
    title: "moveEase",
    img: "https://github.com/Roychen651/moveEase/blob/main/moveEase.png?raw=true",
    desc: "The goal of this project is to make a Prd file to a business of online movie tickets selling.",
    github: "https://github.com/Roychen651/moveEase",
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              onClick={() => window.open(item.github, "_blank")}
              whileHover={{ scale: 1.05, backgroundColor: "#ffcc66" }}
            >
              See Demo
            </motion.button>
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
