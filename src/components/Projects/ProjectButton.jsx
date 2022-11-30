import IconButton from '@mui/material/IconButton'

export const ProjectButton = ({ link, icon }) => {
  return (
    <IconButton LinkComponent='a' href={link} target='_blank' size='large'>
      {icon}
    </IconButton>
  )
}
