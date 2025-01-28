import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (educationData.length === 0) {
    return <div className="text-gray-500 text-center mt-10">No education data available.</div>;
  }

  return (
    <div className="px-10 py-20 grid grid-cols-12 gap-4">
      {/* Sidebar Dots */}
      <div className=" sm:flex flex-col items-center">
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
            className="content-center w-full p-6 hover:cursor-pointer hover: hover:rounded-lg hover:bg-zinc-800"
            onClick={() => setSelectedEducation(entry)}
          >
            <div className="text-2xl font-semibold mb-3">{entry.qualification}</div>
            <div>{entry.institution}</div>
            <div>{entry.place}</div>
          </div>
        ))}
      </div>

      {/* Selected Education Details */}
      <div className="col-start-7 col-end-12 rounded-xl p-6 text-white hidden sm:block hover:border-dashed border-zinc-800">
        {selectedEducation ? (
          <div className="relative">
            <div className="text-3xl font-bold mb-4">{selectedEducation.qualification}</div>
            <div className="text-xl mb-4">{selectedEducation.institution}</div>
            <div className="mb-4">{selectedEducation.place}</div>
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
