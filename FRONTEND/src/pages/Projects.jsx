import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGOFULL.png'

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  // Custom hook to detect screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  useEffect(() => {
    // Listen for screen size changes
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/projects')
      .then((response) => {
        setProjectData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching education data:', error);
        setError('Failed to fetch profile data');
        setLoading(false);
      });
  }, []);

  if (loading) {

  }


  if (error) {
    return <div className='h-screen flex content-center items-center justify-center'>
    <img className=' w-64 h-48 opacity-15' src={LOGO} alt="" />
    </div>;
  }

  return (
    <div className="px-10 py-20 md:py-20 lg:py-20  grid grid-cols-12 gap-4">
      <div className="hidden sm:flex flex-col items-center">
        <div className="relative h-full w-0.5 bg-zinc-800 flex flex-col justify-around">
          {projectData.map((entry, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transform -translate-x-1/2
                ${selectedProject === entry ? 'bg-zinc-50' : 'border bg-gray-900'}`}
              style={{
                top: `${(index / (projectData.length - 1)) * 100}%`,
              }}
              onClick={() => setSelectedProject(entry)}
            />
          ))}
        </div>
      </div>

      <div className="gap-10 col-span-11 grid grid-rows-4 justify-items-start sm:col-span-4">
        {projectData.map((entry, index) => (
          <div
            key={index}
            className="content-center w-full p-6 hover:cursor-pointer  rounded-lg hover:bg-zinc-800"
            onClick={() => !isSmallScreen && setSelectedProject(entry)} // Set project for non-small screens
          >
            {isSmallScreen ? (
              <Link
                to={{
                  pathname: `/project/${entry.id}`,
                  state: { selectedProject: entry },
                }}
              >
                <div className="text-2xl font-semibold mb-3">{entry.heading}</div>
                <div className="text-justify">{entry.subHeading}</div>
              </Link>
            ) : (
              <>
                <div className="text-2xl font-semibold mb-3">{entry.heading}</div>
                <div className="text-justify">{entry.subHeading}</div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className=" col-start-7 col-end-12 rounded-xl p-6 text-white hidden sm:block ">
        {selectedProject ? (
          <div className="relative">
            <div className="text-3xl font-bold mb-4">{selectedProject.heading}</div>
            <div className="mb-48 text-xl">{selectedProject.subHeading}</div>
            
            <div className="mb-4 text-lg text-justify">
              {selectedProject.about || 'No description available.'}
            </div>
            <div className="mb-4 text-lg">Tools: {selectedProject.tools}</div>
          </div>
        ) : (
          <div className="text-center text-gray-400">
            Select a project to view details here.
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
