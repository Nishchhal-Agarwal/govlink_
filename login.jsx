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
