import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Welcome to Our Website!</h2>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sint! Neque cumque quasi dicta nisi qui est omnis! Aliquam incidunt, accusamus modi rem eveniet minima architecto sequi illum quis culpa.
      </p>
      <p className="text-gray-700 mb-6">
        Please login or register to access your personalized dashboard and explore all the features we have to offer. Your journey starts here!
      </p>
      
      <div className="flex space-x-4  justify-center">
        <Link 
          to="/login" 
          className="inline-block bg-cyan-800 text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out"
        >
          Login
        </Link>
       
      </div>
    </div>
  );
}

export default Home;