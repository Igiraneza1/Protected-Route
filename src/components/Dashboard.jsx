import React from "react";

function Dashboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-blue-950 mb-6">Welcome to your Dashboard</h2>
      <div className="bg-green-300 p-4 mb-6 grid grid-cols-2 gap-5 rounded-lg shadow-md">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Dashboard</h2>
          <p>You have successfully logged in and accessed the protected dashboard!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">User Statistics</h3>
          <p className="text-gray-700">Check your personal statistics and recent activity.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Account Settings</h3>
          <p className="text-gray-700">Manage your account preferences and profile.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;