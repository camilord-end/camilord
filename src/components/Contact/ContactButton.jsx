import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


export const ContactButton = ({ name, href, text, target, icon, trans='' }) => {

  const { t, i18n } = useTranslation();

  return (
    <motion.a
      href={href}
      target={target}
      className={name}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div className={`${name}Icon`}>{icon}</motion.div>
      <motion.div className={`${name}Text`}>
        {(trans)? t(trans) : text}
      </motion.div>
    </motion.a>
  );
};
