import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import ArticleIcon from '@mui/icons-material/Article'

export const contactData = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/julian-orozco-72281b232/',
    icon: <LinkedInIcon fontSize='large' color='info' />
  },
  {
    name: 'Email',
    url: 'mailto:juliancaor10@gmail.com',
    icon: <EmailIcon fontSize='large' color='warning' />
  },
  {
    name: 'Tel',
    url: 'tel:+573124990523',
    icon: <LocalPhoneIcon fontSize='large' color='success' />
  },
  {
    name: 'CV',
    url: 'src/assets/CV_en.pdf',
    icon: <ArticleIcon fontSize='large' color='secondary' />
  }
]