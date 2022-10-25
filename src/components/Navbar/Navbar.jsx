import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import './Navbar.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Navbar = ({ theme, handleTheme }) => {
  const [show, setShow] = useState(false);

  const toggleOpen = () => {
    setShow((show) => !show);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' }
  };

  return (
    <div className='nav-container' id='nav'>
      <motion.nav
        animate={show ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <motion.div className='inner-nav'>
          <ul>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to='/'>Home </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to='/projects'>Projects </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to='/about'> About </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to='/contact'>Contact </Link>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div className='themeButton' onClick={handleTheme}>
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </motion.div>
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.div
        className='menu-button'
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1.25 }}
        onClick={toggleOpen}
      >
        <FaBars />
      </motion.div>
    </div>
  );
};
