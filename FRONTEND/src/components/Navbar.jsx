import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/LOGO.svg';
import HamburgerIcon from '../assets/HamburgerIcon.svg';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full px-8 py-4 border border-gray-800 rounded-lg flex flex-row justify-between items-center">
      <Link to="/" className="w-9">
        <img src={LOGO} alt="LOGO" />
      </Link>
      {/* Hamburger menu visible only at md and below */}
      <button
        className="block lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <img src={HamburgerIcon} alt="Menu" className="w-8 h-8" />
      </button>
      {/* Navigation links */}
      <div
        className={` flex flex-col xl:mt-0 lg:mt-0 md:mt-0 mt-10 md:flex-row gap-6 md:gap-20 items-center absolute md:static top-16 right-4  bg-zinc-900  md:bg-transparent  rounded-lg shadow-lg md:shadow-none px-4 py-4 md:p-0 ${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex`}
      >
        <Link
          to="/profile"
          className={`hover:underline ${
            location.pathname === '/profile' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          PROFILE
        </Link>
        <Link
          to="/education"
          className={`hover:underline ${
            location.pathname === '/education' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          EDUCATION
        </Link>
        <Link
          to="/projects"
          className={`hover:underline ${
            location.pathname === '/projects' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          PROJECTS
        </Link>
        {/* <Link
          to="/contact"
          className={`hover:underline ${
            location.pathname === '/contact' ? 'text-blue-500 font-semibold' : ''
          }`}
        >
          <button>CONTACT</button>
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
