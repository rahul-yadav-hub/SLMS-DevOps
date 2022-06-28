import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl">SLMS</span>
      </div>
      <div className="flex-none gap-1">
        <ul className="menu menu-horizontal p-1">
          <Link to="/" className='btn btn-secondary'>Books</Link>
          <Link to="/createbook" className='btn btn-primary ml-1'>Create Book</Link>
        </ul>
      </div>
    </div>
  );
}
