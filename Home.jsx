import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to GovLink</h2>
      <p className="mb-6 text-gray-700">Find government schemes & calculate taxes – personalized for Indian citizens.</p>
      <Link to="/scheme-finder" className="bg-blue-600 text-white px-4 py-2 rounded mr-4">Find Schemes</Link>
      <Link to="/tax-calculator" className="bg-green-600 text-white px-4 py-2 rounded">Calculate Tax</Link>
    </div>
  );
}

export default Home;
