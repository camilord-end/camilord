import { motion } from 'framer-motion'
import { FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa'
import './Contact.css'
import { ContactButton } from './ContactButton'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const linkedInRef = 'https://www.linkedin.com/in/julian-orozco-72281b232/'
  const phoneRef = 'tel:+573124990523'
  const emailRef = 'mailto:juliancaor10@gmail.com'

  const { t } = useTranslation()

  return (
    <motion.div
      className='contact-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className='contact-legend'>
        <motion.h1>{t('contact.part1')}</motion.h1>
      </motion.div>
      <motion.div className='icons-container'>
        <ContactButton
          name='linkedIn'
          href={linkedInRef}
          text='LinkedIn'
          target='_blank'
          icon={<FaLinkedin size={50} />}
        />
        <ContactButton
          trans='contact.part2'
          name='email'
          href={emailRef}
          text='Email'
          target=''
          icon={<FaEnvelopeSquare size={50} />}
        />
        <ContactButton
          trans='contact.part3'
          name='phone'
          href={phoneRef}
          text='Phone'
          target=''
          icon={<FaWhatsappSquare size={50} />}
        />
      </motion.div>
    </motion.div>
  )
}
