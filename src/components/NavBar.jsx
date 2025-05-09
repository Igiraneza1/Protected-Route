import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-green-900 text-white rounded-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl"><Link to='/'>ProtectedRoute</Link></div>
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

            <Link 
              to="/login" 
              className="hover:text-indigo-200 transition duration-300"
            >
              Login
            </Link>
            
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;