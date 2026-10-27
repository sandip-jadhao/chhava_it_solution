import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import CCTVSecurity from './pages/CCTVSecurity';
import ITConsulting from './pages/ITConsulting';
import RefurbishedLaptops from './pages/RefurbishedLaptops';
import Networking from './pages/Networking';
import ITAccessories from './pages/ITAccessories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
        
        {/* === GLOBAL HEADER (NAVBAR) === */}
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">Stratum IT India</Link>
            <div className="hidden md:flex space-x-6 font-semibold text-gray-600">
              <Link to="/" className="hover:text-blue-700 transition">Home</Link>
              <Link to="/#services" className="hover:text-blue-700 transition">Services</Link>
              <Link to="/#how-we-work" className="hover:text-blue-700 transition">How We Work</Link>
              <Link to="/#contact" className="hover:text-blue-700 transition">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/refurbished-laptops" element={<RefurbishedLaptops />} />
            <Route path="/services/networking" element={<Networking />} />
            <Route path="/services/cctv-security" element={<CCTVSecurity />} />
            <Route path="/services/it-accessories" element={<ITAccessories />} />
          </Routes>
        </main>
        {/* <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">            <div>
              <h3 className="text-xl font-bold text-white mb-4">Stratum IT India</h3>
              
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@stratumitindia.com</li>
                <li>Phone: +91 12345 67890</li>
                <li>Location: Maharashtra, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-5 pt-5 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Stratum IT India. All rights reserved.</p>
          </div>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;