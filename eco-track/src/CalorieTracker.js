import React from 'react';

const CalorieTracker = () => {
  const calculateCalories = (activity, distance, time) => {
    let caloriesBurned = 0;
    if (activity === 'cycling') {
      caloriesBurned = distance * 30; // Example calculation
    } else if (activity === 'walking') {
      caloriesBurned = distance * 50;
    } else if (activity === 'running') {
      caloriesBurned = distance * 80;
    } else if (activity === 'sports') {
      caloriesBurned = time * 10;
    }
    return caloriesBurned;
  };

  return (
    <div className="calorie-tracker">
      <h2>Calorie Tracker</h2>
      <p>Calories burned today: {calculateCalories('cycling', 5, 30)} kcal</p>
    </div>
  );
};

export default CalorieTracker;
