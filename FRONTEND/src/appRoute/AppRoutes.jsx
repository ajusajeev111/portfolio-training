import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HeroSection from '../pages/HeroSection';
import Profile from '../pages/Profile';
import Education from '../pages/Education';
import Projects from '../pages/Projects';

const AppRoutes = () => {

  return (
    <div>
      <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default AppRoutes;