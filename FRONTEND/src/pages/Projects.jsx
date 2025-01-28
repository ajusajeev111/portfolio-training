import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Projects() {

  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {

    axios
      .get('http://localhost:8080/api/projects') 
      .then((response) => {
        setProjectData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching education data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='px-10 sm:py-20 md:py-20 lg:py-20 xl:py-28 grid grid-cols-12 gap-4'>



        <div className='hidden sm:flex flex-col items-center'>
                <div className="relative h-full w-0.5 bg-zinc-800 content-around">

                  {projectData.map((entry, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full absolute transform -translate-x-1/2 cursor-pointer 
                        ${selectedProject === entry ? 'bg-zinc-50' : 'border bg-gray-900'} `}
                      style={{ top: `${(index / (projectData.length - 1)) * 100}%` }}
                      onClick={() => setSelectedProject(entry)}
                    />
                  ))}
                </div>
          </div>







      <div className='col-span-11 grid grid-rows-4 justify-items-start sm:col-span-4 '>
          
            {projectData.map((entry, index) => (
              <div className="content-center w-full p-6 hover:cursor-pointer hover:border hover:border-gray-800 rounded-lg hover:bg-zinc-800"
              onClick={() => setSelectedProject(entry)}>
              <div key={index} 
              className='text-2xl font-semibold mb-3'
              >
                {entry.heading}</div>
              <div className='text-justify'>{entry.subHeading}</div>
              </div>
            ))}
        
      </div>

      <div className="col-start-7 col-end-12 rounded-xl p-6 text-white hidden sm:block ">
        {selectedProject ? (
          <div className="relative">
            <div className="text-3xl font-bold mb-4">{selectedProject.heading}</div>
            <div className="mb-48 text-xl">{selectedProject.subHeading}</div>
            <div className="mb-4 text-lg text-justify">
              {selectedProject.about || "No description available."}
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
      

  )
}

export default Projects;