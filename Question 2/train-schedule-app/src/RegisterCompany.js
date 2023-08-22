// src/RegisterCompany.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisterCompany() {
  const [credentials, setCredentials] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function registerCompany() {
      try {
        const response = await axios.post('http://20.244.56.144/train/register', {
          "companyName": "Train Central",
          "ownerName": "Ram",
          "rollNo": "1",
          "ownerEmail": "ram@abc.edu",
          "accessCode": "FKDLjg",
        });

        if (response.status === 200) {
          setCredentials(response.data);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    registerCompany();
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {credentials ? (
        <div>
          <p>Company Name: {credentials.companyName}</p>
          <p>Client ID: {credentials.clientID}</p>
          <p>Client Secret: {credentials.clientSecret}</p>
        </div>
      ) : (
        <p>Registering company...</p>
      )}
    </div>
  );
}

export default RegisterCompany;
