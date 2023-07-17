import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      {/* <h2 className="text-red-500 text-3xl">RECOVERY</h2> */}
    </div>
  );
}

export default App;
