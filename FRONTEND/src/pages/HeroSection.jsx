import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PROPIC from '../assets/propic.png';
import NAME from '../assets/NAME.png';
import GITHUB from '../assets/GITHUB.png';
import INSTAGRAM from '../assets/INSTAGRAM.png';
import LINKEDIN from '../assets/LINKEDIN.png';
import LOGO from '../assets/LOGOFULL.png'

function HeroSection() {
  const [hover, setHover] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError('');
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
    return <div className='h-screen flex content-center items-center justify-center'>
    <img className=' w-64 h-48 opacity-15' src={LOGO} alt="" />
    </div>;
  }

  return (
    <div className="lg:px-20 py-9 grid grid-cols-3 gap-4">
      <div className="pt-10 lg:col-span-1 sm:col-span-3 md:col-span-3 flex justify-center col-span-3">
        <img src={PROPIC} alt="PROFILE" />
      </div>
      <div className="grid p-6 place-items-center content-between col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 row-span-2">
        <div>
          <img src={NAME} alt="NAME" />
          <div className="pt-4 flex justify-between sm:text-md xl:text-2xl font-light">
            <div>{profile?.designation || 'Designation not available'}</div>
            <div className="flex items-right">{profile?.company || 'Company not available'}</div>
          </div>
        </div>

        <div className="text-md xl:text-xl md:text-md mt-10 tracking-wide text-justify font-thin">
          {profile?.aboutMe && <span className="block mb-4">{profile.aboutMe}</span>}

        </div>
      </div>
      <div
        className="flex justify-center items-center border h-12 bg-zinc-900 border-gray-800 rounded-lg p-10 xl:p-14 hover:bg-white hover:text-black cursor-pointer col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {!hover ? (
          <div className="text-lg xl:text-2xl">FIND ME AT</div>
        ) : (
          <div className="flex gap-4">
            <a href={profile?.linkedin || 'https://linkedin.com'} target="_blank" rel="noopener noreferrer">
              <img src={LINKEDIN} alt="LinkedIn" className="opacity-40 hover:opacity-100" />
            </a>
            <a href={profile?.github || 'https://github.com'} target="_blank" rel="noopener noreferrer">
              <img src={GITHUB} alt="GitHub" className="opacity-40 hover:opacity-100" />
            </a>
            <a href={profile?.instagram || 'https://instagram.com'} target="_blank" rel="noopener noreferrer">
              <img src={INSTAGRAM} alt="Instagram" className="opacity-40 hover:opacity-100" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
