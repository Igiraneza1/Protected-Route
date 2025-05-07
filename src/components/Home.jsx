import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Welcome to the Home Page</h2>
      <p className="text-gray-700 mb-4">This is a simple React application with protected routes.</p>
      <p className="text-gray-700 mb-6">Please login to access your dashboard.</p>
      
      <Link 
        to="/login" 
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default Home;