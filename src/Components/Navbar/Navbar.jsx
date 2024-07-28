import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Roy Chen
        </motion.span>
        <div className="social">
          <motion.a
            href="https://www.facebook.com/roy.chen97/"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/roychen651/"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/linkedin-icon.png" alt="" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/roychen.97"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            href="https://github.com/Roychen651"
            whileHover={{ scale: 1.1 }}
          >
            <img src="/github.png" alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
