import React from 'react'
import PROPIC from '../assets/propic.png'
import NAME from '../assets/NAME.png'
// import DOWNLOAD from '../assets/DOWNLOAD.png'

function HeroSection() {
  return (
    <div class=" px-20 pt-10 grid grid-cols-3 gap-4">
        <div class="col-span-1">
            <img src={PROPIC} alt="PROFILE" />

        </div>
        <div class="col-span-2 row-span-2 p-10 grid place-items-center content-between">
          <div>
              <img src={NAME} alt="NAME" /> 
              <div className="pt-4 flex justify-between text-xl font-light">
                <div>ASSOCIATE SOFTWARE ENGINEER</div>
                <div>TARENTO TECHNOLOGIES</div>
              </div>
          </div>
              {/* <div class="flex flex-row justify-center text-2xl border border-gray-800 rounded-lg p-10">
                <div className='flex mb-4 mr-4 content-center'>
                  RESUME
                  </div>
                <div className='content-center'>
                  <img src={DOWNLOAD} alt="" />
                </div>
              </div> */}

          <div className='text-xl tracking-wide text-justify font-thin'>
            
            <span class="block mb-4">I am a creative and detail-oriented Associate Software Engineer passionate about designing and developing modern web applications and user-centric solutions. With a strong foundation in frontend technologies and a keen eye for aesthetics, </span>
            <span class="block">I specialize in building scalable, intuitive, and engaging software experiences that enhance user interaction and satisfaction. My expertise lies in creating responsive web interfaces using modern frameworks and tools, ensuring cross-platform compatibility and seamless navigation. I take pride in combining technical proficiency with innovative design principles to deliver impactful solutions that align with business goals and user expectations.</span>
            
          </div>
        </div>
        <div class=" text-center content-center text-2xl col-span-1 border border-gray-800 rounded-lg p-10">
            FIND ME AT
        </div>
    </div>
  )
}

export default HeroSection