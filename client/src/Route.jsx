import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Navbar from './Components/navbar.comp';
import CreateBook from './Pages/bookCreate.page';
import Home from './Pages/home.page';

function Global() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function AppRoute() {
  const routes = useRoutes([
    {
      element: <Global />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/createbook',
          element: <CreateBook />,
        },
      ],
    },
  ]);
  return routes;
}

export default AppRoute;
