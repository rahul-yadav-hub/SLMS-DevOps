import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Navbar from './Components/navbar.comp';
import CreateBook from './Pages/bookCreate.page';
import CreateAuthor from './Pages/createAuthor.page';

import CreateStudent from './Pages/Student/createStudent.page';
import Home from './Pages/home.page';
import Student from './Pages/Student/student.page';
import UpdateStudent from './Pages/Student/updateStudent.page';
import { Toaster } from 'react-hot-toast';
import IssueBook from './Pages/Transaction/issueBook.page';
import ReturnBook from './Pages/Transaction/returnBook.page';

function Global() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Toaster />
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
                {
                    path: '/createauthor',
                    element: <CreateAuthor />,
                },
                {
                    path: '/issue',
                    element: <IssueBook />,
                },
                {
                    path: '/return',
                    element: <ReturnBook />,
                },
                {
                    path: '/student',
                    // element: <Student />,
                    children: [
                        {
                            path: '',
                            element: <Student />,
                        },
                        {
                            path: 'add',
                            element: <CreateStudent />,
                        },
                        {
                            path: 'update/:id',
                            element: <UpdateStudent />,
                        },
                    ],
                },
            ],
        },
    ]);
    return routes;
}

export default AppRoute;
