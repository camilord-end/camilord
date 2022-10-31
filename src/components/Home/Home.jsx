import { useEffect } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


export const Home = () => {
  const { t, i18n } = useTranslation();

  //useEffect(() => {
  //  console.log(i18n.language);
  //}, [i18n])
  
  return (
    <motion.div
      className='home-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='image-div'>
        <img
          id='photo'
          src='https://raw.githubusercontent.com/camilord-end/camilord/master/src/assets/minga.png'
          alt='personal-image'
        />
      </div>
      <div className='home-text'>
        <h1 className='home-name'>Julian Orozco</h1>
        <h2>
          {t('home.part1')}
        </h2>
        <h3>
          {t('home.part2')}
        </h3>
      </div>
    </motion.div>
  );
};
