import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import CCTVSecurity from './pages/CCTVSecurity';
import ITConsulting from './pages/ERPInventory';
import RefurbishedLaptops from './pages/RefurbishedLaptops';
import Networking from './pages/Networking';
import ITAccessories from './pages/ITSupport';
import AboutUs from './pages/AboutUs';

import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import logoImage from './assets/laptops/logo.jpg';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col relative">
        
        {/* === GLOBAL HEADER (NAVBAR) === */}
        <nav className="bg-white shadow-sm sticky top-0 z-50 py-2 border-b-2 border-blue-600">
          {/* Use a grid layout to ensure the center nav stays perfectly centered */}
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 items-center">
            
            {/* 1. Left: Logo Section */}
            <Link to="/" className="flex items-center gap-2 justify-self-start">
              <img src={logoImage} alt="CHHAVA IT SOLUTION Logo" className="h-20 w-auto" />
            </Link>

            {/* 2. Center: Navigation Links */}
            <div className="hidden xl:flex justify-center items-center space-x-10 font-bold text-[#001a4d] text-xl justify-self-center">
              <Link to="/" className="hover:text-[#0055ff] transition">Home</Link>
              <Link to="/#services" className="hover:text-[#0055ff] transition">Services</Link>
              <Link to="/about-us" className="hover:text-[#0055ff] transition">AboutUs</Link>
              <Link to="/#contact" className="hover:text-[#0055ff] transition">Contact</Link>
            </div>

            {/* 3. Right: Get a Quote Button */}
            <div className="hidden md:flex justify-self-end">
                <Link to="/#contact" className="bg-[#0033ff] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-800 transition shadow-md flex items-center gap-2">
                  Get a Quote <span>→</span>
                </Link>
            </div>
            
            {/* Mobile Menu Icon (Placeholder for smaller screens) */}
             <div className="lg:hidden flex items-center justify-self-end col-span-2 md:col-span-1">
                <button className="text-[#001a4d] focus:outline-none">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
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
            <Route path="/about-us" element={<AboutUs />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        {/* === GLOBAL FOOTER === */}
        <footer className="bg-gray-50 text-gray-300 py-2">
          <div className="max-w-7xl mx-auto px-2 flex flex-col md:flex-row justify-between gap-6 text-center md:text-left items-center md:items-start">
            
            {/* Left: Footer Logo & Admin Trigger */}
            <div className="max-w-xs">
              {/* Secret Admin Login Trigger wrapped around the Logo Image */}
              <Link to="/admin" className="block cursor-default group">
                <div className="flex items-center gap-3 bg-white p-1 rounded-lg hover:shadow-lg transition-shadow">
                  <img src={logoImage} alt="CHHAVA IT SOLUTION Logo" className="h-22 w-auto" />
                </div>
              </Link>
            </div>

            {/* Right: Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 ">Contact Info</h3>
              <ul className="space-y-1 text-gray-500">
                <li className="flex items-center gap-1 justify-center md:justify-start">
                   Email: chhavaitsolution@gmail.com
                </li>
                <li className="flex items-center gap-1 justify-center md:justify-start">
                   Phone: +91 9850260032
                </li>
                <li className="flex items-center gap-1 justify-center md:justify-start">
                   Location: Maharashtra, India
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-4 pt-3 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} CHHAVA IT SOLUTION. All rights reserved.</p>
          </div>
        </footer>

        {/* === FLOATING WHATSAPP BUTTON === */}
        <a 
          href="https://wa.me/9850260032" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-50 flex items-center justify-center"
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            className="w-8 h-8 fill-current"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.3l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.4-186.6 184.4zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;