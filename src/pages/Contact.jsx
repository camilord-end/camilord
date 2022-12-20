import { ContactButton } from '../components/Contact/ContactButton'
import { contactData } from '../utils/contactLinks'

import { useTranslation } from 'react-i18next'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'

export const Contact = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth='xs' align='center'>
      <Card variant='outlined'>
        <CardHeader title={t('contact.title')} />
        <Divider />
        <List component='div'>
          {contactData.map(({ name, url, icon }) => (
            <ContactButton key={name} icon={icon} name={name} url={url} />
          ))}
        </List>
      </Card>
    </Container>
  )
}
