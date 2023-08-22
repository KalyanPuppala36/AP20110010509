// src/App.js
import React from 'react';
import RegisterCompany from './RegisterCompany';
import ObtainToken from './ObtainToken';
import TrainSchedules from './TrainSchedules';
import SingleTrainDetails from './SingleTrainDetails';

function App() {
  return (
    <div className="App">
      <RegisterCompany />
      <ObtainToken />
      <TrainSchedules />
      <SingleTrainDetails trainNumber="2344" />
    </div>
  );
}

export default App;
