import React from "react";

function Dashboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Welcome to your Dashboard</h2>
      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <p className="text-green-700">You have successfully logged in and accessed the protected dashboard!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">User Stats</h3>
          <p className="text-gray-700">View your personal statistics and activity.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">Account Settings</h3>
          <p className="text-gray-700">Manage your account preferences and profile.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;