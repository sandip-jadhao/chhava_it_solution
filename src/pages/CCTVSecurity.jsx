import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CCTVSecurity = () => {
  // This forces the browser to start at the absolute top of the page when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 'py-12' applies padding to the top and bottom, creating the physical gray space you marked
    <div className="bg-gray-50 flex-grow w-full px-4 sm:px-6 lg:px-8 py-12 font-sans">
      
      {/* The White Content Card */}
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">CCTV Security Systems</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Protect your business and premises with our advanced, high-definition CCTV surveillance setups and 24/7 monitoring infrastructure.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Hardware:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
          <li>IP & HD Analog Cameras</li>
          <li>NVR/DVR Installation & Configuration</li>
          <li>Remote Mobile Viewing Setup</li>
          <li>Maintenance & Troubleshooting</li>
        </ul>
        
        <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition inline-block shadow-md">
          Back to Home
        </Link>
      </div>
      
    </div>
  );
};

export default CCTVSecurity;