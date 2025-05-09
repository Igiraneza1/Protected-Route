import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome Back!</h2>
      <p className="text-gray-700 mb-6">We're excited to have you here. Press the button below to access your dashboard and continue your journey.</p>
      <button 
        onClick={handleLogin}
        className="bg-orange-800 text-white font-medium py-2 px-6 rounded-md transition transform hover:scale-105"
      >
        Log In
      </button>
    </div>
  );
}

export default Login;