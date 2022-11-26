import './i18n'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorPage } from './components/ErrorPage'
import { Provider } from './routes/Provider'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
