import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CCTVSecurity = () => {
  // Simulated hardware data for CCTV to match the structure of laptops
  const [hardware, setHardware] = useState([
    { id: 1, brand: 'Hikvision', model: 'Dome Camera', type: 'IP Camera', resolution: '4MP', storage: 'N/A', price: 2500, image_url: null },
    { id: 2, brand: 'Dahua', model: 'Bullet Camera', type: 'HD Analog', resolution: '2MP', storage: 'N/A', price: 1800, image_url: null },
    { id: 3, brand: 'CP Plus', model: 'PTZ Camera', type: 'IP Camera', resolution: '4MP', storage: 'N/A', price: 8500, image_url: null },
    { id: 4, brand: 'Hikvision', model: '8-Channel NVR', type: 'Recorder', resolution: 'Up to 8MP', storage: '2TB HDD', price: 6500, image_url: null },
    { id: 5, brand: 'Seagate', model: 'SkyHawk HDD', type: 'Storage', resolution: 'N/A', storage: '4TB', price: 7200, image_url: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // 1. Initialize navigate hook
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // If you add a Supabase table for CCTV, you would call fetchHardware() here.
  }, []);

  // 2. Create the click handler function
  const handleProductClick = (productName) => {
    // Navigate to home and pass the product name in the state
    navigate('/#contact', { state: { interestedProduct: productName } });
  }; 

  const filteredHardware = activeFilter === 'All' 
    ? hardware 
    : hardware.filter(item => item.type.includes(activeFilter) || item.brand === activeFilter);

  return (
    <div className="bg-blue-50/30 flex-grow py-12 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900">Advanced CCTV Security</h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">High-definition • 24/7 Monitoring • Secure Installation</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'IP Camera', 'HD Analog', 'Recorder'].map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition ${
                  activeFilter === filter 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
             <select className="ml-2 px-3 py-1.5 rounded-md border border-gray-200 text-sm text-gray-700 bg-white focus:outline-none">
              <option>Sort: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Hardware Grid */}
        {loading ? (
          <p className="text-center text-gray-500 py-20">Loading inventory...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredHardware.map((item) => (
              // 3. Add onClick and cursor-pointer to the wrapper div
              <div 
                key={item.id} 
                onClick={() => handleProductClick(`${item.brand} ${item.model}`)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition group relative cursor-pointer"
              >
                
                {/* Brand Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm border border-gray-100 z-10">
                  <span className="text-xs font-bold text-blue-800 px-2">{item.brand}</span>
                </div>

                {/* Hardware Image Placeholder */}
                <div className="h-40 bg-gray-50 rounded-lg mb-4 flex items-center justify-center p-4">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.model} className="max-h-full object-contain mix-blend-multiply" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-3xl">
                       {item.type.includes('Camera') ? '📷' : '📼'}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-gray-900 text-lg leading-tight mb-4 group-hover:text-blue-700 transition">
                   {item.model}
                </h3>

                {/* Specs List */}
                <ul className="text-sm text-gray-500 space-y-2 mb-6 flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">🏷️</span> {item.type}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">👁️</span> {item.resolution}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400">💾</span> {item.storage}
                  </li>
                </ul>

                {/* Price */}
                <div className="mt-auto">
                  <p className="text-xl font-black text-red-600">
                    ₹ {item.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CCTVSecurity;