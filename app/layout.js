import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Education System",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Ansaar-e-Muhammad School System offers a perfect blend of academic excellence and Islamic values, shaping confident and successful individuals!",
  keywords: "school, education, learning, excellence, students, teachers, curriculum, values, success, ansar-e-muhammad school system. ansar-e-muhammad, ansar, education system, school system, islamic values, academic excellence",
  authors: [{ name: "Ansar-e-Muhammad" }],
  creator: "Ansar-e-Muhammad",
  publisher: "Ansar-e-Muhammad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
