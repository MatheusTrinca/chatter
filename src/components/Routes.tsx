import { createBrowserRouter } from 'react-router';
import Signup from './auth/Signup';
import Login from './auth/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <Login />,
  },
]);

export default router;
