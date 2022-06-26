import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Navbar from './Components/navbar.comp';
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
        //   {
        //     path: '/login',
        //     element: <Login />,
        //   },
        //   {
        //     path: '/register',
        //     element: <Register />,
        //   },
        {
          path: '/',
          element: <Home />,
        },
        //   { path: '/blog', element: <Blog /> },
        //   { path: '/explore', element: <Explore /> },
        //   { path: '/workspace/:id', element: <Workspace /> },
        //   { path: '/offers', element: <Explore /> },
        //   { path: '/profile', element: <UserProfile /> },
        //   { path: '/createworkspace', element: <CreateWorkspace /> },
        //   {
        //     path: '/admin',
        //     element: <Admin />,
        //     children: [{ index: true, element: <div> hello</div> }],
        //   },
      ],
    },
  ]);
  return routes;
}

export default AppRoute;
