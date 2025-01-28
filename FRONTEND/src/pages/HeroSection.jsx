import React, { useState } from 'react';
import PROPIC from '../assets/propic.png'
import NAME from '../assets/NAME.png'
import GITHUB from '../assets/GITHUB.png'
import INSTAGRAM from '../assets/INSTAGRAM.png'
import LINKEDIN from '../assets/LINKEDIN.png'


function HeroSection() {

  const [hover, setHover] = useState(false);
  
  return (
    <div class=" lg:px-20 py-9 grid grid-cols-3 gap-4">
        <div class="pt-10 lg:col-span-1 sm:col-span-3 md:col-span-3 flex justify-center col-span-3">
            <img src={PROPIC} alt="PROFILE" />

        </div>
        <div class=" grid place-items-center content-between col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 row-span-2">
          <div>
              <img src={NAME} alt="NAME" /> 
              <div className="pt-4 flex justify-between sm:text-md xl:text-2xl font-light ">
                <div>ASSOCIATE SOFTWARE ENGINEER</div>
                <div className='flex items-right'>TARENTO TECHNOLOGIES</div>
              </div>
          </div>


          <div className='text-md xl:text-xl md:text-md  mt-10 tracking-wide text-justify font-thin'>
            
            <span class="block mb-4">I am a creative and detail-oriented Associate Software Engineer passionate about designing and developing modern web applications and user-centric solutions. With a strong foundation in frontend technologies and a keen eye for aesthetics, </span>
            <span class="block">I specialize in building scalable, intuitive, and engaging software experiences that enhance user interaction and satisfaction. My expertise lies in creating responsive web interfaces using modern frameworks and tools, ensuring cross-platform compatibility and seamless navigation. I take pride in combining technical proficiency with innovative design principles to deliver impactful solutions that align with business goals and user expectations.</span>
            
          </div>
        </div>
        <div className="flex justify-center items-center border h-12 bg-zinc-900 border-gray-800 rounded-lg p-10 xl:p-14 hover:bg-white hover:text-black cursor-pointer col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover ? (
          <div className="text-lg xl:text-2xl">FIND ME AT</div>
        ) : (
          <div className="flex gap-4 ">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={LINKEDIN} alt="LinkedIn" className=" opacity-40 hover:opacity-100" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={GITHUB} alt="GitHub" className="opacity-40  hover:opacity-100" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={INSTAGRAM} alt="Instagram" className="opacity-40  hover:opacity-100" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroSection