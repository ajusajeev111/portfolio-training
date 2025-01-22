import React from 'react'
import TIMELINE from '../assets/TIMELINE.png'
import NOLOGO from '../assets/NO LOGO.png'


function Education() {
  return (
    <div className='px-20 pt-20 grid grid-cols-12 gap-4'>

      <div className='col-start-1 grid grid-rows-4 justify-items-end'>
      <div>2016</div>
      <div>2017 - 2019</div>
      <div>2020 - 2024</div>
      <div>2025 - Present</div>
      </div>

      <div className='justify-items-center'>
        <img src={TIMELINE} alt="" />
      </div>
      <div className='col-span-4 grid grid-rows-4 justify-items-start '>
          <div className="content-start">   
            <div className='text-2xl font-semibold mb-3'>HIGHSCHOOL</div>
            <div>BVB, Ponnani</div>
          </div>

          <div className="content-start">   
            <div className='text-2xl font-semibold mb-3'>HIGHER SECONDARY</div>
            <div>MI HSS, Ponnani</div>
          </div>
  
          <div className="content-start">   
            <div className='text-2xl font-semibold mb-3'>GRADUATION</div>
            <div>B-Tech in Computer Science & Engg.</div>
            <div>NSS COLLEGE OF ENGINEERING, Palakkad</div>
          </div>
 
          <div className="content-start">   
            <div className='text-2xl font-semibold mb-3'>ASSOCIATE SOFTWARE ENGINEER</div>
            <div>Tarento Technologies Pvt Ltd</div>
            <div>Koramangala,Beguluru</div>
          </div>
        
      </div>
      <div className="col-start-8 col-end-12 bg-zinc-800 rounded-xl justify-items-center content-center">
        <img src={NOLOGO} alt="" />
      </div>
      
    </div> 
  )
}

export default Education