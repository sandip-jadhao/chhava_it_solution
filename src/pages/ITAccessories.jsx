import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITAccessories = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 flex-grow w-full px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">IT Accessories</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Complete your office setup with our comprehensive range of high-performance computer peripherals and essential IT accessories tailored for daily operations.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Available Inventory:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
          <li>Monitors & Display Solutions</li>
          <li>Ergonomic Keyboards & Mice</li>
          <li>Server Racks & Uninterruptible Power Supplies (UPS)</li>
          <li>Adapters, Cables, and Docking Stations</li>
        </ul>
        <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition shadow-md inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ITAccessories;