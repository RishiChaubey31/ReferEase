import React from "react";
import Navbar from "./components/Navbar";
import Headers from "./components/Header";
import Motives from "./components/Motives";
import HeroImage from "./components/HeroImage";
import Circles from "./components/Circles";
import Table from "./components/Table";
import FAQComponent from "./components/FAQComponent";
import ProgramCTA from "./components/ProgramCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Headers />
      <Navbar />
      <Motives />
      <HeroImage />
      <Circles />
      <Table />
      <FAQComponent />
      <ProgramCTA />
      <Footer />
    </div>
  );
}

export default App;
