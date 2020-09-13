import React from 'react';
import './App.css';
import Routing from './views/Routing';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';

function App() {
  return (
    <div className="App">
      <Routing />
      <BottomNavigation />
    </div>
  );
}

export default App;
