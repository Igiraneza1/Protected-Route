import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-purple-50">
        <Navbar />
        <main className="w-full flex justify-center mt-10">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;