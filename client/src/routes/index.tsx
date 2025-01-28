import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '@/layouts/default'
import HomePage from '@/pages/home/home'
import JobsPage from '@/pages/jobs/jobs'
import CompaniesPage from '@/pages/companies/companies'
import BlogPage from '@/pages/blog/blog'
import LoginPage from '@/pages/login/login'
import NotFoundPage from '@/pages/404/404'
import RegisterPage from '@/pages/register/register'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'jobs',
        element: <JobsPage />,
      },
      {
        path: 'companies',
        element: <CompaniesPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])