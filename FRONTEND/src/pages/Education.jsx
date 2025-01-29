import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FALLBACK from '../assets/FALLBACK.png';
import LOGO from '../assets/LOGOFULL.png';

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        setError('Failed to fetch education data.');
        setLoading(false);
      });
  }, []);

  const getImageUrl = (educationID) => {
    return `http://localhost:8080/api/educations/${educationID}/image`
  }
  
  
  if (loading) {
  }

  if (error) {
    return <div className='h-screen flex content-center items-center justify-center'>
    <img className=' w-64 h-48 opacity-15' src={LOGO} alt="" />
    </div>;
  }

  if (educationData.length === 0) {
    return <div className='h-screen flex content-center items-center justify-center'>
    <img className=' w-64 h-48 opacity-15' src={LOGO} alt="" />
    </div>;
  }

  return (
    <div className="px-10 py-20 grid grid-cols-12 gap-4">
      {/* Sidebar Dots */}
      <div className="sm:flex flex-col items-center">
        <div className="relative h-full w-0.5 bg-zinc-800 flex flex-col justify-around">
          {educationData.map((entry, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transform -translate-x-1/2
                ${selectedEducation === entry ? 'bg-zinc-50' : 'border bg-gray-900'}`}
              style={{
                top: `${(index / (educationData.length - 1)) * 100}%`,
              }}
              onClick={() => setSelectedEducation(entry)}
            />
          ))}
        </div>
      </div>

      {/* List of Education Entries */}
      <div className="gap-10 col-span-11 grid grid-rows-4 justify-items-start sm:col-span-4">
        {educationData.map((entry, index) => (
          <div
            key={index}
            className="content-center w-full p-6 hover:cursor-pointer hover:rounded-lg hover:bg-zinc-800"
            onClick={() => setSelectedEducation(entry)}
          >
            <div className="text-2xl font-semibold mb-3">{entry.qualification}</div>
            <div>{entry.institution}</div>
            <div>{entry.place}</div>
          </div>
        ))}
      </div>

      {/* Selected Education Details */}
      <div className=" col-start-7 col-end-12 content-center rounded-xl items-center justify-center text-white hidden sm:block hover:border-dashed border-zinc-800">
        {selectedEducation ? (
          <div className="space-y-40">
            <img
              src={selectedEducation ? getImageUrl(selectedEducation.id) : FALLBACK}
              onError={(e) => (e.target.src = FALLBACK)}
              alt="Education"
              className="rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <div className="text-center text-gray-400">
            Select an education entry to view details here.
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
