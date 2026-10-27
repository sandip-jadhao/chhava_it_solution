import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const RefurbishedLaptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const { data, error } = await supabase.from('laptops').select('*');
      if (error) throw error;
      setLaptops(data);
    } catch (error) {
      console.error('Error fetching laptops:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredLaptops = activeFilter === 'All' 
    ? laptops 
    : laptops.filter(laptop => laptop.category === activeFilter);

  return (
    <div className="bg-blue-50/30 flex-grow py-12 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-900">Featured Refurbished Laptops</h1>
            <p className="text-gray-500 text-sm mt-1 font-medium">Quality tested • Best price • Warranty support</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Business', 'Student', 'Budget'].map(filter => (
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

        {/* Laptops Grid */}
        {loading ? (
          <p className="text-center text-gray-500 py-20">Loading inventory...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredLaptops.map((laptop) => {
              
              // Resolve the local image path dynamically from src/assets/laptops
              const imagePath = laptop.image_url 
                ? new URL(`../assets/laptops/${laptop.image_url}`, import.meta.url).href
                : null;

              return (
                <div key={laptop.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition group relative">
                  
                  {/* Brand Badge (Simulated top right) */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm border border-gray-100 z-10">
                    <span className="text-xs font-bold text-blue-800 px-2">{laptop.brand}</span>
                  </div>

                  {/* Laptop Image Placeholder */}
                  <div className="h-40 bg-gray-50 rounded-lg mb-4 flex items-center justify-center p-4">
                    {imagePath ? (
                      <img src={imagePath} alt={laptop.model} className="max-h-full object-contain mix-blend-multiply" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-md animate-pulse"></div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-gray-900 text-lg leading-tight mb-4 group-hover:text-blue-700 transition">
                    {laptop.brand} {laptop.model}
                  </h3>

                  {/* Specs List */}
                  <ul className="text-sm text-gray-500 space-y-2 mb-6 flex-grow">
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">⚙️</span> {laptop.processor}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">💾</span> {laptop.ram}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">💽</span> {laptop.storage}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-gray-400">🖥️</span> {laptop.display}
                    </li>
                  </ul>

                  {/* Price */}
                  <div className="mt-auto">
                    <p className="text-xl font-black text-red-600">
                      ₹ {laptop.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default RefurbishedLaptops;