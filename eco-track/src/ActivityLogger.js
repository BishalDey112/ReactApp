import React, { useState } from 'react';

const ActivityLogger = () => {
  const [activity, setActivity] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save activity
    alert(`Logged: ${activity} for ${distance} km in ${time} minutes`);
  };

  return (
    <div className="activity-logger">
      <h2>Log Your Activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Activity:
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="cycling">Cycling</option>
            <option value="walking">Walking</option>
            <option value="running">Running</option>
            <option value="sports">Sports</option>
          </select>
        </label>
        <label>
          Distance (in km):
          <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} required />
        </label>
        <label>
          Time (in minutes):
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit">Log Activity</button>
      </form>
    </div>
  );
};

export default ActivityLogger;
