import SkillsData from '../../data/ProficientSkillsData.json'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { SkillsCarousel } from './SkillsCarousel'

export const ProficientSkills = () => {
  const { t } = useTranslation()

  return (
    <>
      <ListItem sx={{ textAlign: 'center' }}>
        <ListItemText primary={t('home.part7')} />
      </ListItem>
      <Box>
        <SkillsCarousel data={SkillsData} />
      </Box>
    </>
  )
}
