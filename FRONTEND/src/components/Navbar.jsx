import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../assets/LOGO.png'

function Navbar() {
  return (
    <div className='w-full px-8 py-4 border border-gray-800 rounded-lg flex flex-row justify-between'>
        <Link to={"/"} className="w-9">
            <img src={LOGO} alt="LOGO" />
        </Link>
        <div className="flex flex-row gap-20 items-center">
          <Link to="/profile" className="hover:underline">PROFILE</Link>
          <Link to="/education" className="hover:underline">EDUCATION</Link>
          <Link to="/skills" className="hover:underline">SKILLS</Link>
          <Link to="/projects" className="hover:underline">PROJECTS</Link>
          </div>
        <div className="contact">
            <button>CONTACT</button>
        </div>
    </div>
  )
}

export default Navbar