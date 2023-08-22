// src/TrainSchedules.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainSchedules() {
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrainDetails() {
      try {
        const response = await axios.get('http://20.244.56.144:80/train/trains', {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token
          },
        });

        if (response.status === 200) {
          setTrainData(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchTrainDetails();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Train Schedules</h2>
      <ul>
        {trainData.map((train, index) => (
          <li key={index}>
            <p>Train Name: {train.trainName}</p>
            <p>Train Number: {train.trainNumber}</p>
            {/* Display other train details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainSchedules;
