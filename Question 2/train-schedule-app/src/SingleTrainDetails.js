// src/SingleTrainDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SingleTrainDetails({ trainNumber }) {
  const [trainDetails, setTrainDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSingleTrainDetails() {
      try {
        const response = await axios.get(`http://20.244.56.144:80/train/trains/${trainNumber}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token
          },
        });

        if (response.status === 200) {
          setTrainDetails(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchSingleTrainDetails();
  }, [trainNumber]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Single Train Details</h2>
      <p>Train Name: {trainDetails.trainName}</p>
      <p>Train Number: {trainDetails.trainNumber}</p>
      {/* Display other train details */}
    </div>
  );
}

export default SingleTrainDetails;
