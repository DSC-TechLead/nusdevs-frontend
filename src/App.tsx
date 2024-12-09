import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationPage1 from "./pages/applicationPage1"
import ApplicationPage2 from './pages/applicationPage2';

function App() {
  return (
    <div className="App">
      <ApplicationPage2 requestName="Dummy Team" topLevelQuestion="Contact Info"/>
    </div>
  );
}

export default App;
