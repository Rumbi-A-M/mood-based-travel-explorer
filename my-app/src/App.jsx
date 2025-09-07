import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sihle Sibiya</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/work" className="hover:text-blue-600">Work</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sihle Sibiya. All Rights Reserved.
      </footer>
    </div>
  );
}