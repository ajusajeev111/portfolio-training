import React from 'react'
import POINTS from '../assets/TIMELINE.png'
import NOLOGO from '../assets/NO LOGO.png'


function Projects() {
  return (
    <div className='px-20 pt-20 grid grid-cols-12 gap-4'>

      <div className='justify-items-center'>
        <img src={POINTS} alt="" />
      </div>
      <div className='col-span-4 grid grid-rows-4 justify-items-start '>
          <div className="content-start hover:cursor-pointer">   
            <div className='text-2xl font-semibold mb-3'>PLANT DISEASE DETECTION</div>
            <div>CNN-based system for identifying plant diseases.</div>
            <div>Tools: Python, TensorFlow, OpenCV, React.js</div>
          </div>

          <div className="content-start hover:cursor-pointer">   
            <div className='text-2xl font-semibold mb-3'>ILLICIT ACTIVITY DETECTION IN BITCOIN</div>
            <div>Deep learning models for detecting illicit Bitcoin transactions.</div>
            <div>Tools: Python, TensorFlow, OpenCV, React.js</div>
          </div>
  
          <div className="content-start hover:cursor-pointer">   
            <div className='text-2xl font-semibold mb-3'>GRIEVANCE MANAGEMENT SYSYTEM</div>
            <div>System to manage user grievances with role-based views.</div>
            <div>Tools: React.js, Spring Boot, PostgreSQL</div>
          </div>
 
          <div className="content-start hover:cursor-pointer">   
            <div className='text-2xl font-semibold mb-3'>PORTFOLIO</div>
            <div>Personal Portfolio</div>
            <div>Tools: React.js, Spring Boot, PostgreSQL</div>
          </div>
        
      </div>
      <div className="col-start-8 col-end-12 bg-zinc-800 rounded-xl justify-items-center content-center">
        <img src={NOLOGO} alt="" />
      </div>
      
    </div> 
  )
}

export default Projects;