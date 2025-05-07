import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">Protected React App</div>
          <div className="space-x-6">
            <Link 
              to="/" 
              className="hover:text-indigo-200 transition duration-300"
            >
              Home
            </Link>
            
            {!isLoggedIn && (
              <Link 
                to="/login" 
                className="hover:text-indigo-200 transition duration-300"
              >
                Login
              </Link>
            )}
            
            <Link 
              to="/dashboard" 
              className="hover:text-indigo-200 transition duration-300"
            >
              Dashboard
            </Link>
            
            {isLoggedIn && (
              <button 
                onClick={handleLogout}
                className="hover:text-indigo-200 transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;