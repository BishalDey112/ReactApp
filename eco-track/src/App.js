// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Eco-Track</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  // State for activities, carbon footprint, and calories burned
  const [activities, setActivities] = useState([]);
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  // Add a new activity
  const addActivity = (activity) => {
    setActivities([...activities, activity]);
    setCarbonFootprint(carbonFootprint + activity.carbonSaved);
    setCaloriesBurned(caloriesBurned + activity.calories);
  };

  return (
    <div className="App">
      <header>
        <h1>EcoTrack: Fitness & Sustainability</h1>
      </header>

      <div className="content">
        <ActivityLogger addActivity={addActivity} />
        <CarbonFootprintDisplay footprint={carbonFootprint} />
        <CaloriesDisplay calories={caloriesBurned} />
        <ActivityList activities={activities} />
        <WellnessTips />
      </div>
    </div>
  );
}

// Component to log eco-friendly activities
function ActivityLogger({ addActivity }) {
  const [activityType, setActivityType] = useState('Walking');
  const [time, setTime] = useState('');

  // Calorie and carbon footprint multipliers for different activities
  const activityData = {
    Walking: { caloriesPerMin: 5, carbonSavedPerMin: 0.02 },
    Cycling: { caloriesPerMin: 8, carbonSavedPerMin: 0.03 },
    Running: { caloriesPerMin: 10, carbonSavedPerMin: 0.05 },
    Sports: { caloriesPerMin: 7, carbonSavedPerMin: 0.01 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeSpent = parseFloat(time);

    if (timeSpent && timeSpent > 0) {
      const { caloriesPerMin, carbonSavedPerMin } = activityData[activityType];
      const newActivity = {
        type: activityType,
        time: timeSpent,
        calories: timeSpent * caloriesPerMin,
        carbonSaved: timeSpent * carbonSavedPerMin,
      };

      addActivity(newActivity);
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="activity-logger">
      <h2>Log Eco-friendly Activity</h2>

      <label>Activity Type:</label>
      <select value={activityType} onChange={(e) => setActivityType(e.target.value)}>
        <option value="Walking">Walking</option>
        <option value="Cycling">Cycling</option>
        <option value="Running">Running</option>
        <option value="Sports">Sports</option>
      </select>

      <label>Time Spent (minutes):</label>
      <input
        type="number"
        placeholder="Time in minutes"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Add Activity</button>
    </form>
  );
}

// Component to display total carbon footprint
function CarbonFootprintDisplay({ footprint }) {
  return (
    <div className="carbon-footprint-display">
      <h2>Total Carbon Footprint Saved</h2>
      <p>{footprint.toFixed(2)} kg of CO2</p>
    </div>
  );
}

// Component to display total calories burned
function CaloriesDisplay({ calories }) {
  return (
    <div className="calories-display">
      <h2>Total Calories Burned</h2>
      <p>{calories.toFixed(2)} kcal</p>
    </div>
  );
}

// Component to list all activities
function ActivityList({ activities }) {
  return (
    <div className="activity-list">
      <h2>Logged Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.type} for {activity.time} minutes — Burned {activity.calories.toFixed(2)} kcal, Saved {activity.carbonSaved.toFixed(2)} kg CO2
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component to display wellness tips
function WellnessTips() {
  const tips = [
    'Take a walk instead of driving short distances!',
    'Try plant-based meals for a day.',
    'Cycle to work or school.',
    'Opt for reusable containers instead of single-use plastics.',
  ];

  return (
    <div className="wellness-tips">
      <h2>Wellness & Sustainability Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

