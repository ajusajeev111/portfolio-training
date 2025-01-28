
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Education() {

  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEducation, setSelectedEducation] = useState(null);

  useEffect(() => {

    axios
      .get('http://localhost:8080/api/educations') 
      .then((response) => {
        setEducationData(response.data);
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
    <div className='px-20 md:py-16 xl:py-24 grid grid-cols-12 gap-4'>

      <div className='xl:col-start-1 xl:grid xl:grid-rows-4 xl:justify-items-end hidden sm:hidden'>
        {educationData.map((entry, index) => (
          <div key={index}>{entry.timeline}</div>
        ))}
      </div>


      <div className='hidden sm:flex flex-col items-center'>
                <div className="relative h-full w-0.5 bg-zinc-800 content-around">

                  {educationData.map((entry, index) => (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded-full absolute transform -translate-x-1/2 cursor-pointer 
                        ${selectedEducation === entry ? 'bg-zinc-50' : 'border bg-gray-900'} `}
                      style={{ top: `${(index / (educationData.length - 1)) * 100}%` }}
                      onClick={() => setSelectedEducation(entry)}
                    />
                  ))}
                </div>
              </div>




      <div className='col-span-4 grid grid-rows-4 justify-items-start '>
        
          {educationData.map((entry, index) => (
          <div key={index} className="content-start mb-6">
            <div className="text-2xl font-semibold mb-3">{entry.qualification}</div>
            <div>{entry.institution}</div>
            <div>{entry.place}</div>
          </div>
        ))}


      </div>
      {/* <div className="col-start-8 col-end-12 bg-zinc-800 rounded-xl justify-items-center content-center">
        <img src={NOLOGO} alt="" />
      </div> */}
      
    </div> 
  )
}

export default Education