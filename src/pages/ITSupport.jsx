import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ITAccessories = () => {
  // Simulated hardware/services data for IT Support & Accessories
  const [hardware, setHardware] = useState([
    { id: 1, brand: 'Dell', model: '24-inch IPS Monitor', type: 'Display', features: '1080p, HDMI/VGA', price: 9500, image_url: null },
    { id: 2, brand: 'Logitech', model: 'Wireless Combo MK270', type: 'Peripherals', features: 'Keyboard & Mouse', price: 1650, image_url: null },
    { id: 3, brand: 'APC', model: 'Back-UPS 600VA', type: 'Power', features: 'Battery Backup', price: 3200, image_url: null },
    { id: 4, brand: 'Service', model: 'Annual Maintenance Contract', type: 'Support', features: '24/7 IT Support', price: 12000, image_url: null },
    { id: 5, brand: 'Lenovo', model: 'USB-C Docking Station', type: 'Accessories', features: 'Multi-port Hub', price: 4500, image_url: null },
  ]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Initialize navigate hook for Contact redirection
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Click handler function to route to contact form
  const handleProductClick = (productName) => {
    navigate('/#contact', { state: { interestedProduct: productName } });
  }; 

  const filteredHardware = activeFilter === 'All' 
    ? hardware 
    : hardware.filter(item => item.type.includes(activeFilter));

  return (
    <div className="bg-blue-50/30 flex-grow py-12 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900">IT Support & Accessories</h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">Peripherals • Power Backup • AMC Services</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Display', 'Peripherals', 'Power', 'Accessories', 'Support'].map(filter => (
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
              // Added onClick and cursor-pointer
              <div 
                key={item.id} 
                onClick={() => handleProductClick(`${item.brand} ${item.model}`)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition group relative cursor-pointer"
              >
                
                {/* Brand Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm border border-gray-100 z-10">
                  <span className="text-xs font-bold text-blue-800 px-2">{item.brand}</span>
                </div>

                {/* Image/Icon Placeholder */}
                <div className="h-40 bg-gray-50 rounded-lg mb-4 flex items-center justify-center p-4">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.model} className="max-h-full object-contain mix-blend-multiply" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center text-4xl">
                       {item.type === 'Display' ? '🖥️' : item.type === 'Power' ? '🔋' : item.type === 'Support' ? '🛠️' : '🖱️'}
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
                    <span className="text-gray-400">🛠️</span> {item.features}
                  </li>
                </ul>

                {/* Price */}
                <div className="mt-auto">
                  <p className="text-xl font-black text-red-600">
                    ₹ {item.price.toLocaleString('en-IN')}
                    <span className="text-xs text-gray-400 font-normal ml-1 hover:hidden">{item.type === 'Support' ? '/yr' : ''}</span>
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

export default ITAccessories;