import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
import { motion } from "framer-motion";

export const Navbar = ({ theme, handleTheme }) => {
  return (
    <div className="nav-container">
      <div className="name-container">
        <motion.h1
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/" className="name">
            Julian Orozco
          </Link>
        </motion.h1>
      </div>
      <motion.div
        className="theme-button"
        onClick={handleTheme}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.25 }}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </motion.div>
      <div className="link-container">
        <nav>
          <ul>
            <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.1 }}>
              <Link to="/projects">Projects </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.1 }}>
              <Link to="/about"> About </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.1 }}>
              <Link to="/contact">Contact </Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
