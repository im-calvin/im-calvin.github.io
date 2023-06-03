import 'tailwindcss/tailwind.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from 'components/Root'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from 'pages/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        element: <ProjectPage />,
        path: 'projects'
      }
    ]
  }
])

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<RouterProvider router={router} />)
