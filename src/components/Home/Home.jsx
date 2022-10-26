import './Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <motion.div
      className='home-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className='image-div'>
        <motion.img
          id='photo'
          src='https://raw.githubusercontent.com/camilord-end/camilord/master/src/assets/minga.png'
          alt='personal-image'
        />
      </motion.div>
      <motion.div className='home-text'>
        <motion.h1 className='home-name'>Julian Orozco</motion.h1>
        <motion.h2>Frontend Developer</motion.h2>
        <motion.h3>lorem ipsum</motion.h3>
      </motion.div>
    </motion.div>
  );
};
