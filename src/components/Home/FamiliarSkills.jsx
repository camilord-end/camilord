import data from '../../data/FamiliarSkillsData.json'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { SkillsCarousel } from './SkillsCarousel'

export const FamiliarSkills = () => {
  const { t } = useTranslation()
  return (
    <>
      <ListItem sx={{ textAlign: 'center' }}>
        <ListItemText primary={t('home.part8')} />
      </ListItem>
      <Box>
        <SkillsCarousel data={data} />
      </Box>
    </>
  )
}
