import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your EcoTrack Dashboard</h2>
      <p>Track your fitness progress and eco-friendly actions here.</p>
      <div className="stats">
        {/* Add more stats here as needed */}
        <div className="stat">
          <h3>Calories Burned</h3>
          <p>1500 kcal</p>
        </div>
        <div className="stat">
          <h3>Carbon Saved</h3>
          <p>5 kg CO₂</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
