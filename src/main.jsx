import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@/pages/Home/Home';
import '@/styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Projects } from '@/pages/Projects/Projects';
import { App } from '@/App';
import { ErrorPage } from '@/pages/Errors/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
