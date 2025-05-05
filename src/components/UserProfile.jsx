import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("User not found")
          const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-xl text-indigo-600 animate-pulse">Loading user data...</p>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-xl text-red-500 bg-red-100 p-4 rounded-lg shadow">Error: {error}</p>
    </div>
  );
  
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-4 border-t-2 border-purple-600">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 border-b pb-2">User Profile</h2>
      <div className="space-y-3">
        <div className="bg-blue-50 p-3 rounded-lg">
          <p><span className="font-bold text-purple-600">Name:</span> {user.name}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p><span className="font-bold text-purple-600">Username:</span> {user.username}</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p><span className="font-bold text-purple-600">Email:</span> {user.email}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg">
          <p><span className="font-bold text-purple-600">Company:</span> {user.company.name}</p>
        </div>
      </div>
    </div>
  )
}