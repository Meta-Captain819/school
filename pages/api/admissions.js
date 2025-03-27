import { connectToDatabase } from "@/app/utilis/db";
import Admission from "@/app/models/Admission";
export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
if(req.method === "POST"){
  try {
    await connectToDatabase();

    const { name,fname, email, address, phone, grade, message } = req.body;

    // Validate required fields
    if (!name || !fname || !email || !address || !phone || !grade) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save admission entry
    const newAdmission = new Admission({ name,fname, email, address, phone, grade, message });
    await newAdmission.save();

    return res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
if (req.method === "GET") {
  try {
    await connectToDatabase();

    const admissions = await Admission.find({})

    return res.status(200).json(admissions);
  } catch (error) {
    console.error("Database Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
}