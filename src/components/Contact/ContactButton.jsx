import { motion } from 'framer-motion';

export const ContactButton = ({ name, href, text, target, icon }) => {
  return (
    <motion.a
      href={href}
      target={target}
      className={name}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className={`${name}Icon`}>{icon}</motion.div>
      <motion.div className={`${name}Text`}>{text}</motion.div>
    </motion.a>
  );
};
