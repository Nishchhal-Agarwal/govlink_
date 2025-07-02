import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SchemeFinder from "./pages/SchemeFinder";
import TaxCalculator from "./pages/TaxCalculator";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheme-finder" element={<SchemeFinder />} />
        <Route path="/tax-calculator" element={<TaxCalculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
