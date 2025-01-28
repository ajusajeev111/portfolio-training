import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch project details using the ID
    axios
      .get(`http://localhost:8080/api/projects/${id}`)
      .then((response) => {
        setProjectDetails(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" rounded-xl p-10 text-white ">
      {projectDetails ? (
        <div className="relative">
          <div className="text-3xl font-bold mb-4">{projectDetails.heading}</div>
          <div className="mb-48 text-xl">{projectDetails.subHeading}</div>
          <div className="mb-4 text-lg text-justify">
            {projectDetails.about || 'No description available.'}
          </div>
          <div className="mb-4 text-lg">Tools: {projectDetails.tools}</div>
        </div>
      ) : (
        <div className="text-center text-gray-400">
          Unable to fetch project details.
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
