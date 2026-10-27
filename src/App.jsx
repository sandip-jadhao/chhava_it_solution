import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Import other pages as you create them, e.g.:
// import About from './pages/About';
// import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* You can add a <Navbar /> component here so it appears on all pages */}
        
        <main>
          <Routes>
            {/* Define the paths for your pages */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
          </Routes>
        </main>
        
        {/* You can add a <Footer /> component here */}
      </div>
    </Router>
  );
}

export default App;