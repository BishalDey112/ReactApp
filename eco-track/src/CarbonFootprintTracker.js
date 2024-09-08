import React from 'react';

const CarbonFootprintTracker = () => {
  const calculateCarbonSaved = (activity) => {
    if (activity === 'cycling') {
      return '5 kg CO₂ saved'; // Example value
    }
    return 'No carbon saved';
  };

  return (
    <div className="carbon-footprint-tracker">
      <h2>Carbon Footprint Tracker</h2>
      <p>{calculateCarbonSaved('cycling')}</p>
    </div>
  );
};

export default CarbonFootprintTracker;
