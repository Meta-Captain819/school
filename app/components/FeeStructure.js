"use client"
import { motion } from "framer-motion";

export default function FeeStructure() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">FEE STRUCTURE (2025-2026)</h1>
        <p className="text-center text-lg font-semibold text-yellow-600 mt-2">Admission Fee: 35,000/-</p>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full  text-center text-black text-sm">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="p-2 ">Description</th>
                {[...Array(8)].map((_, i) => (
                  <th key={i} className="p-2 border">Class {i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Registration Fee", 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700],
                ["Security Deposit", 1600, 1700, 1800, 1900, 2000, 2100, 2100, 2200],
                ["Tuition Fee", 10000, 12500, 13000, 13500, 14000, 15000, 16000, 17000],
                ["CCTV & Mobile Updates", 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
                ["Sub Total", 16500, 17200, 17900, 18600, 19300, 20000, 20700, 21400],
              ].map((row, index) => (
                <tr key={index} className="odd:bg-gray-50">
                  {row.map((item, i) => (
                    <td key={i} className="p-2 ">{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-8 text-xl font-semibold text-gray-800">DOCUMENTS REQUIRED:</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 text-sm sm:text-base">
          <li>8 Passport size photos of child.</li>
          <li>2 Thumb/Stamp size photos of child.</li>
          <li>2 Thumb/Stamp size photos of Parents/Guardian.</li>
          <li>Copy of Birth Certificate.</li>
          <li>Copy of Vaccination Record.</li>
          <li>Copy of CNIC Card of Child’s Parents.</li>
          <li>Parents must inform the school in writing for any address/phone/email update.</li>
        </ul>

      </motion.div>
    </div>
  );
}
