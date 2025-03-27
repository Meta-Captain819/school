"use client"; // Required for useState, useEffect

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminPage() {
  const [admissions, setAdmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Fetch admissions from backend
  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch("/api/admissions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token for authentication
          },
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setAdmissions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAdmissions();
  }, []);

  // Filter admissions by search term
  const filteredAdmissions = admissions.filter((admission) =>
    admission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logout function
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/Logout", { method: "POST" });
      if (res.ok) {
        window.location.href = "/";
      } else {
        console.error("Failed to log out");
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Header */}
      <div className="header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-between items-center h-auto sm:h-16 space-y-4 sm:space-y-0"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Panel</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full text-black p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Responsive Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] md:min-w-full divide-gray-200">
              <thead>
                <tr className="bg-yellow-400">
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    F/Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAdmissions.length > 0 ? (
                  filteredAdmissions.map((admission, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{admission.name}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{admission.fname}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 ">{admission.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 ">{admission.address}</td>
                      <td className="px-4 py-3 text-sm text-gray-500 ">{admission.phone}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{admission.grade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-3 text-center text-sm text-gray-500">
                      No records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
