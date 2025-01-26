import RegisterPage from '@/pages/register/register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      // ... other routes ...
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]) 