import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HeroSection from '../pages/HeroSection';
import Profile from '../pages/Profile';
import Education from '../pages/Education';
// import Skill from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const AppRoutes = () => {

  return (
    <div>
      <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          {/* <Route path="/skills" element={<Skill/>} /> */}
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;