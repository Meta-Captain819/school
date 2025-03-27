"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    fname:"",
    email: "",
    address: "",
    phone: "",
    grade: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Application submitted successfully!");
        setFormData({ name: "", email: "", phone: "", grade: "", message: "" });
      } else {
        setSuccess(`Error: ${response.statusText || `Unknown error`}`);
      }
    } catch (error) {
      setSuccess("Error submitting form.");
    }

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
        <input
          type="text"
          name="fname"
          placeholder="Father Name"
          value={formData.fname}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        />

        <select
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg text-black"
        >
          <option value="">Select Grade</option>
          <option value="Grade 1">Montessori</option>
          <option value="Grade 1">KG</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 4">Grade 5</option>
          <option value="Grade 4">Grade 6</option>
          <option value="Grade 4">Grade 7</option>
          <option value="Grade 4">Grade 8</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Why do you want to enroll?"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg text-black"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {success && <p className="text-center text-green-600 mt-4">{success}</p>}
    </motion.form>
  );
}
