import React from 'react'
import LOGO from '../assets/LOGO.png'

function Navbar() {
  return (
    <div className='w-full px-8 py-10 flex flex-row justify-between'>
        <div className="w-9">
            <img src={LOGO} alt="LOGO" />
        </div>
        <div className="flex flex-row gap-10 items-center">
            <div>Profile</div>
            <div>Education</div>
            <div>Skills</div>
            <div>Projects</div>
        </div>
        <div className="contact">
            <button>CONTACT</button>
        </div>
    </div>
  )
}

export default Navbar