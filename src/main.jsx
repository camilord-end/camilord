import './i18n'
import './index.css'
import ReactDOM from 'react-dom/client'
import { router } from './utils/router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
