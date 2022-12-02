import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined'
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined'
//Colors
import { green, pink, yellow } from '@mui/material/colors'

export const linkItems = [
  {
    name: 'Home',
    icon: <CottageOutlinedIcon color={pink['A200']} htmlColor={pink['A200']} />,
    href: '/'
  },
  {
    name: 'Projects',
    icon: (
      <PermMediaOutlinedIcon
        color={yellow['A700']}
        htmlColor={yellow['A700']}
      />
    ),
    href: '/projects'
  },
  {
    name: 'Contact',
    icon: (
      <ConnectWithoutContactOutlinedIcon
        color={green[500]}
        htmlColor={green[500]}
      />
    ),
    href: '/contact'
  }
]
