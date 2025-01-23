import React, { useState, useEffect } from 'react';
import DOWNLOAD from '../assets/DOWNLOAD.png';
import DYUKSHA from '../assets/DYUKSHA.png';
import NOOPURAM from '../assets/NOOPURAM23.png';

function Profile() {
  const [currentRole, setCurrentRole] = useState("ARJUN SAJEEV N");
  const roles = ["ARJUN SAJEEV N", "DEVELOPER", "DESIGNER", "PHOTOGRAPHER" ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 2000);
  
    return () => clearInterval(interval);
  }, [roles]); 

  return (
    <div className='px-20 pt-20 grid grid-cols-3 gap-4'>
      <div className='text-3xl'>Hello</div>
      <div className="flex flex-row col-span-3 justify-between">
        <div className="flex flex-col">
          <div className='text-6xl '>I am <span className='font-bold'>{currentRole}</span></div>
        </div>
        <div className="flex flex-row justify-items-center text-2xl border border-gray-800 rounded-lg p-4 hover:bg-zinc-800">
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

      <div className='col-start-1 col-end-3 text-3xl font-semibold'>
        <div>RECENT WORKS</div>
        <div className='grid grid-cols-2 gap-4 mt-10 content-stretch'>
          <div className='row-span-12 flex flex-row justify-center items-center text-2xl border border-gray-800 rounded-lg p-4 hover:bg-zinc-800 '>
            <img src={DYUKSHA} alt="" />
          </div>
          <div className='row-span-12 flex flex-row justify-center items-center text-2xl border border-gray-800 rounded-lg p-4 hover:bg-zinc-800'>
            <img src={NOOPURAM} alt="" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 place-self-stretch">
        <div className="col-span-3 text-3xl gap-y-20 font-semibold place-self-stretch">SKILLS</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>React</div>
        <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Figma</div>
        <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Frontend</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Database</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Backend</div>
        <div className='col-span-2 border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Development</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>JavaScript</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>PostgreSQL</div>
        <div className='border border-gray-800 rounded-full p-4 text-center hover:bg-zinc-800'>Node.js</div>
      </div>
    </div>
  );
}

export default Profile;