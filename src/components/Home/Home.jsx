import './Home.css';
import { motion } from 'framer-motion';
import { Trans,useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

export const Home = () => {
  const { t, i18n } = useTranslation();
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
        <motion.h2>
          <Trans i18nKey='home.part1'>
          Frontend Developer
          </Trans>
        </motion.h2>
        <motion.h3>
          <Trans i18nKey='home.part2'>
            I will transform all your ideas into code.
          </Trans>
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};
