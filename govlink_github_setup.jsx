// govlink/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8lztT_G-CkJXgt9XVRubPvtj1wor-EMM",
  authDomain: "govlink-de6d9.firebaseapp.com",
  projectId: "govlink-de6d9",
  storageBucket: "govlink-de6d9.appspot.com",
  messagingSenderId: "820760894114",
  appId: "1:820760894114:web:5f8f5543910568505795fb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// govlink/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// govlink/src/App.jsx
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

// govlink/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">GovLink</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/scheme-finder" className="hover:underline">Scheme Finder</Link>
        <Link to="/tax-calculator" className="hover:underline">Tax Calculator</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// govlink/src/pages/Home.jsx
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

// govlink/src/pages/SchemeFinder.jsx
import React from "react";

function SchemeFinder() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Scheme Finder</h2>
      <p className="text-gray-600">This will use your age, income, gender, job to suggest schemes.</p>
      {/* Logic with Firebase/AI goes here */}
    </div>
  );
}

export default SchemeFinder;

// govlink/src/pages/TaxCalculator.jsx
import React, { useState } from "react";

function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(null);

  const calculate = () => {
    let result = 0;
    if (income <= 250000) result = 0;
    else if (income <= 500000) result = (income - 250000) * 0.05;
    else if (income <= 1000000) result = (income - 500000) * 0.2 + 12500;
    else result = (income - 1000000) * 0.3 + 112500;
    setTax(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tax Calculator</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter annual income"
        className="border p-2 rounded mb-4"
      />
      <br />
      <button onClick={calculate} className="bg-green-600 text-white px-4 py-2 rounded">Calculate</button>
      {tax !== null && (
        <p className="mt-4 text-lg">Estimated Tax: ₹{tax.toFixed(2)}</p>
      )}
    </div>
  );
}

export default TaxCalculator;

// govlink/src/pages/Login.jsx
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-4" />
      <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
      <p className="mt-4 text-sm">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  );
}

export default Login;

// govlink/src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-4" />
      <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
      <p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  );
}

export default Signup;
