import React from "react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <h2 className="text-red-500 text-3xl">RECOVERY</h2>
    </div>
  );
}

export default App;
