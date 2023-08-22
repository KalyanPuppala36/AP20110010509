// src/ObtainToken.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ObtainToken() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    async function obtainAccessToken() {
      try {
        const response = await axios.post('http://20.244.56.144/train/auth', {
          companyName: 'Train Central',
          clientID: 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27',
          ownerName: 'Ram',
          ownerEmail: 'ram@abc.edu',
          rollNo: '1',
          clientSecret: 'XOyolORPayKBODAN',
        });

        if (response.status === 200) {
          setAccessToken(response.data.access_token);
        }
      } catch (error) {
        console.error('Error obtaining access token:', error);
      }
    }

    obtainAccessToken();
  }, []);

  return (
    <div>
      {accessToken ? (
        <p>Access Token: {accessToken}</p>
      ) : (
        <p>Obtaining access token...</p>
      )}
    </div>
  );
}

export default ObtainToken;
