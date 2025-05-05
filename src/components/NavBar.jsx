import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-600 w-full p-5 shadow-lg">
      <div className="flex justify-start space-x-12 px-6">
        <Link to="/" className="text-white hover:text-white font-semibold text-lg">Home</Link>
        <Link to="/about" className="text-white hover:text-white font-semibold text-lg">About</Link>
        <Link to="/user/1" className="text-white hover:text-white font-semibold text-lg">User 1</Link>
        <Link to="/user/2" className="text-white hover:text-white font-semibold text-lg">User 2</Link>
        <Link to="/user/3" className="text-white hover:text-white font-semibold text-lg">User 3</Link>
      </div>
    </nav>
  );
}
