import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import CCTVSecurity from './pages/CCTVSecurity';
import ITConsulting from './pages/ITConsulting';
import RefurbishedLaptops from './pages/RefurbishedLaptops';
import Networking from './pages/Networking';
import ITAccessories from './pages/ITAccessories';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col relative">
        
        {/* === GLOBAL HEADER (NAVBAR) === */}
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">CHHAVA IT SOLUTION</Link>
            <div className="hidden md:flex space-x-9 font-semibold text-gray-600">
              <Link to="/" className="hover:text-blue-700 transition">Home</Link>
              <Link to="/#services" className="hover:text-blue-700 transition">Services</Link>
              <Link to="/#contact" className="hover:text-blue-700 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* === DYNAMIC PAGE CONTENT === */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/refurbished-laptops" element={<RefurbishedLaptops />} />
            <Route path="/services/networking" element={<Networking />} />
            <Route path="/services/cctv-security" element={<CCTVSecurity />} />
            <Route path="/services/it-accessories" element={<ITAccessories />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* === GLOBAL FOOTER === */}
        <footer className="bg-gray-900 text-gray-300 py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
            <div>
              {/* Secret Admin Login Trigger */}
              <Link to="/admin" className="text-xl font-bold text-white mb-4 block cursor-default">
                CHHAVA IT SOLUTION
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: chhavaitsolution@gmail.com</li>
                <li>Phone: +91 9850260032</li>
                <li>Location: Maharashtra, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-5 pt-5 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} CHHAVA IT SOLUTION. All rights reserved.</p>
          </div>
        </footer>

        {/* === FLOATING WHATSAPP BUTTON === */}
        {/* Update the phone number below to your actual WhatsApp business number */}
        <a 
          href="https://wa.me/9850260032" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            className="w-8 h-8 fill-current"
          >
            {/* Standard WhatsApp SVG Icon */}
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.4-186.6 184.4zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>

      </div>
    </Router>
  );
}

export default App;