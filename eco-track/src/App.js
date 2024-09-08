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

// 2nd Part
 
// 

// 3rd part


// src/App.js

// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';  // Import Dashboard component
import ActivityLogger from './ActivityLogger';
import CalorieTracker from './CalorieTracker';
import CarbonFootprintTracker from './CarbonFootprintTracker';
import RewardsSection from './RewardsSection';
import CommunityChallenges from './CommunityChallenges';
import WellnessTips from './WellnessTips';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <header>
        <h1>EcoTrack: Fitness & Sustainability</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

      <div className="dashboard">
        <Dashboard />
        <ActivityLogger />
        <CalorieTracker />
        <CarbonFootprintTracker />
        <RewardsSection />
        <CommunityChallenges />
        <WellnessTips />
      </div>
    </div>
  );
}

export default App;
