import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      name: 'Home',
      id: 1,
      path: '/',
    },
    {
      name: 'About Us',
      id: 2,
      path: '/about',
    },
    {
      name: 'Services',
      id: 3,
      path: '/products',
    },
    {
      name: 'Contact',
      id: 4,
      path: '/contact',
    },
    {
      name: 'Blog',
      id: 5,
      path: '/blog',
    },
  ];

  return (
    <nav className="bg-blue-300">
      <div onClick={() => setOpen(!open)} className="md:hidden ">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-blue-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-blue-700" />
          )}
        </span>
      </div>

      <ul
        className={`md:flex absolute md:static duration-500 pl-6 pb-5 py-5 bg-blue-400 ${
          open ? 'top-6' : '-top-60'
        }`}
      >
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
