import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOWNLOAD from '../assets/DOWNLOAD.png';
import DYUKSHA from '../assets/DYUKSHA.png';
import NOOPURAM from '../assets/NOOPURAM23.png';
import PHOTOGRAPHY from '../assets/CAMERA.png'
import Resume from '../assets/ATS RESUME.pdf';

function Profile() {
  const [currentRole, setCurrentRole] = useState("ARJUN SAJEEV N");

  const [skills, setSkills] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    const roles = ["ARJUN SAJEEV N", "DEVELOPER", "DESIGNER", "PHOTOGRAPHER"];
    
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 1500);
  
    return () => clearInterval(interval);
  }, []); 

  const handleResumeClick = () => {

    const link = document.createElement('a');
    link.href = Resume;
    link.target = '_blank';
    link.click(); 
  };


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/profiles`)
      .then((response) => {
        console.log(response.data);
        setProfile(response.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
        setError('Failed to fetch profile data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/skills`)
      .then((response) => {
        console.log(response.data);
        setSkills(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
        setError('Failed to fetch profile data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }


  



  return (
    <div className='lg:px-20 md:px-12 pt-20 pb-2 xl:pb-20 grid grid-cols-3 gap-4'>
      <div className='text-md xl:text-3xl'>Hello,</div>
      <div className="flex flex-row col-span-3 justify-between grid-cols-3 ">
        <div className="flex flex-col col-start-3 ">
          <div className='lg:text-6xl md:text-5xl sm:text-5xl text-3xl'>I am </div> 
          <div className='lg:text-6xl md:text-5xl sm:text-5xl text-3xl'><span className='font-bold'>{currentRole}</span></div>

        </div>
        <div className="flex flex-col items-center sm:flex-row md:flex-row lg:flex-row xl:flex-row  lg:items-center md:items-center text-md xl:text-2xl border border-gray-800 rounded-lg p-4 hover:bg-zinc-800 "
         onClick={handleResumeClick}>
          <div className='sm:mr-4'>
            RESUME
          </div>
          <div className='content-center w-4 xl:w-auto'>
            <img src={DOWNLOAD} alt="" />
          </div>
        </div>
      </div>
      <div className="col-span-3 text-md xl:text-2xl">{profile?.brief || 'Designation not available'}</div>
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

      <div className='col-start-1 col-end-4 sm:col-end-4 md:col-end-4 lg:col-end-3 text-3xl font-semibold'>
        <div>RECENT WORKS</div>
        <div className='grid grid-cols-3 xl:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4 '>
          <div className="">
          <a href="https://instagram.com/dyuksha.nssce" target="_blank" rel="noopener noreferrer"> 
            <div className=' row-span-full flex flex-row justify-center items-center border border-gray-800 rounded-lg h-24 p-6 xl:p-4  hover:bg-zinc-800 hover:cursor-pointer'>    
              <img src={DYUKSHA} alt="" className='' />
            </div>
          </a>
          </div>
          <div>
          <a href="https://instagram.com/noopuram_23" target="_blank" rel="noopener noreferrer"> 
            <div className='row-span-full flex flex-row justify-center items-center border border-gray-800 rounded-lg h-24 p-6 xl:p-4 hover:bg-zinc-800 hover:cursor-pointer'>    
              <img src={NOOPURAM} alt="" />
            </div>
          </a>
          </div>
          <div>
          <a href="https://instagram.com/noopuram_23" target="_blank" rel="noopener noreferrer"> 
            <div className='col-span-2 flex flex-row justify-center items-center border border-gray-800 rounded-lg h-24 p-6 xl:p-4  hover:bg-zinc-800 hover:cursor-pointer text-sm'>
              <img src={PHOTOGRAPHY} alt="" />
            </div>
          </a>
          </div>
        </div>
      </div>
      
      <div className=" xxs:col-span-3 lg:col-span-1 xl:col-span-1 grid grid-cols-3 gap-4 ">
        <div className=" col-span-3 text-3xl gap-y-20 font-semibold ">SKILLS</div>
        {skills.map((skill, index) => (
      <div 
        key={index} 
        className='border border-gray-800 rounded-full p-1 xl:p-4 text-center hover:bg-zinc-800 bg-zinc-900'
      >
        {skill.name}
      </div>
    ))} 
      </div>
    </div>

  );
}

export default Profile;