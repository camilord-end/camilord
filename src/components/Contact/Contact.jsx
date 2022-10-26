import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';
import './Contact.css';

export const Contact = () => {
  return (
    <motion.div
      className='contact-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className='contact-legend'>
        <motion.h1>Contact me:</motion.h1>
      </motion.div>
      <motion.div className='icons-container'>
        <motion.a
          href='https://www.linkedin.com/in/julian-orozco-72281b232/'
          target='_blank'
          className='linkedIn'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className='linkedInIcon'>
            <FaLinkedin size={50} />
          </motion.div>
          <motion.div className='linkedInText'>
            <p>LinkedIn</p>
          </motion.div>
        </motion.a>
        <motion.a
          href='mailto:juliancaor10@gmail.com'
          className='email'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className='emailIcon'>
            <FaEnvelopeSquare size={50} />
          </motion.div>
          <motion.div className='emailText'>
            <p>Email</p>
          </motion.div>
        </motion.a>
        <motion.a href='tel:+573124990523' className='phone' whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}>
          <motion.div className='phoneIcon'>
            <FaWhatsappSquare size={50} />
          </motion.div>
          <motion.div className='phoneText'>
            <p>Phone</p>
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
