import React from 'react';
import Navbar from "./components/Navbar";
import Headers from "./components/header";
import Motives from './components/Motives';
import HeroImage from './components/HeroImage';


function App() {
  return (
   <div>
    <Headers/>
    <Navbar />
    <Motives/>
    <HeroImage/>
   </div>

  );
}

export default App;