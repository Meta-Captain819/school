"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.message);
    } else {
window.location.href = "/admin"; // Redirect to admin page on success
}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <input className="w-full p-2 border rounded-md mb-3 text-black" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

        <input className="w-full p-2 border rounded-md mb-3 text-black" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

        <button className="w-full bg-yellow-400 text-white py-2 rounded-md" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
