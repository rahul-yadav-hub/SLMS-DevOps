import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <div className="navbar flex-col  gap-2 bg-base-100">
          <div className="flex justify-center w-full ">
              <span className="btn btn-ghost normal-case text-xl">
                  Student Library Management System
              </span>
          </div>
          <div className=" w-full flex justify-center gap-1">
              <ul className="menu menu-horizontal gap-1 p-1">
                  <Link to="/" className="btn btn-secondary">
                      Books
                  </Link>
                  <Link to="/createbook" className="btn btn-primary">
                      Create Book
                  </Link>
                  <Link to="/createauthor" className="btn">
                      Add Author
                  </Link>
                  <Link to="/student" className="btn btn-secondary">
                      Students
                  </Link>
                  <Link to="/student/add" className="btn">
                      Add Student
                  </Link>
                  <Link to="/issue" className="btn btn-primary">
                      Issue Book
                  </Link>
                  <Link to="/return" className="btn btn-info">
                      Return Book
                  </Link>
              </ul>
          </div>
      </div>
  );
}
