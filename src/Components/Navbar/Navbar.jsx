import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Roy Chen
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/roy.chen97/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/roychen651/">
            <img src="/linkedin-icon.png" alt="" />
          </a>
          <a href="https://www.instagram.com/roychen.97">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/Roychen651">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;