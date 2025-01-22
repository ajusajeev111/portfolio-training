import React from 'react'
import DOWNLOAD from '../assets/DOWNLOAD.png';

function Profile() {
  return (
    <div className='px-20 pt-20 grid grid-cols-3 gap-4'>
        <div className='text-3xl'>Hello</div>
        <div className="flex flex-row col-span-3 justify-between">
            <div className="flex flex-col">
              <div className='text-6xl '>I am <span className='font-bold'>ARJUN SAJEEV N</span></div>
            </div>
            <div className="flex flex-row justify-center text-2xl border border-gray-800 rounded-lg p-4">
                <div className='flex mr-4 content-center'>
                  RESUME
                  </div>
                <div className='content-center'>
                  <img src={DOWNLOAD} alt="" />
                </div>
              </div>
        </div>
        <div className="col-span-2 text-2xl">A Creative Graphic Designer and Web Developer.</div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        <div className="col-span-3"></div>
        
        
        <div className='col-start-1 col-end-3 text-4xl gap-y-20'>
            <div>RECENT WORKS</div>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <div className='row-span-12 flex flex-row justify-center items-center text-2xl border border-gray-800 rounded-lg p-4 '>
                  Dyuksha
                </div>
                <div className='row-span-12 flex flex-row justify-center items-center text-2xl border border-gray-800 rounded-lg p-4 '>
                  Noopuram
                </div>
            </div>
          
            
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className='border border-gray-800 rounded-full p-4 text-center'>React</div>
          <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center'>Figma</div>
          <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center'>Frontend</div>
          <div className='border border-gray-800 rounded-full p-4 text-center'>Database</div>
          <div className='border border-gray-800 rounded-full p-4 text-center'>Backend</div>
          <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center'>Development</div>
          <div className='border border-gray-800 rounded-full p-4 text-center'>JavaScript</div>
          <div className='border border-gray-800 rounded-full p-4 text-center'>PostgreSQL</div>
          <div className='border border-gray-800 rounded-full p-4 text-center'>Node.js</div>
          
        </div>
        
    </div>
  )
}

export default Profile
