import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  // Forces the browser to start at the absolute top of the page when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      
      {/* Dynamic Hero Section (Matches image_632b63.png) */}
      <section className="bg-blue-600 text-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-wide">
            Web Development Services
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-50 leading-relaxed font-light">
            We build custom, high-performance, and responsive websites tailored to your unique requirements using modern frameworks and technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/#contact" className="bg-white text-blue-700 px-8 py-3.5 rounded font-bold text-lg hover:bg-gray-100 transition shadow-sm">
              Start Your Project
            </Link>
            <Link to="/" className="bg-blue-500 text-white px-8 py-3.5 rounded font-bold text-lg border border-transparent hover:bg-blue-400 transition shadow-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content & Features Section (Matches image_63289c.png) */}
      <section className="py-24 max-w-7xl mx-auto px-4 flex-grow w-full">
        
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-[#1e3a8a] mb-4 tracking-wide">What We Offer</h3>
          <p className="text-gray-600 text-lg">Comprehensive web solutions to bring your ideas to life.</p>
        </div>
        
        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Custom Apps */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group h-full">
            <div className="w-16 h-16 bg-[#eff6ff] text-[#3b82f6] rounded-xl flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1f2937]">Custom Applications</h4>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Highly responsive and scalable web applications built with modern frameworks like React. We deliver seamless user experiences and robust functionality.
            </p>
            <ul className="text-sm text-gray-500 space-y-3 font-medium">
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Single Page Applications (SPAs)</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Progressive Web Apps (PWAs)</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Custom Dashboards & Portals</li>
            </ul>
          </div>

          {/* Card 2: E-Commerce */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group h-full">
            <div className="w-16 h-16 bg-[#f0fdf4] text-[#22c55e] rounded-xl flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1f2937]">E-commerce Solutions</h4>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Secure, conversion-optimized online stores engineered for speed and reliability to maximize your digital sales.
            </p>
            <ul className="text-sm text-gray-500 space-y-3 font-medium">
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Custom Storefronts</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Payment Gateway Integration</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Inventory Management UI</li>
            </ul>
          </div>

          {/* Card 3: Database & SEO */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group h-full">
            <div className="w-16 h-16 bg-[#faf5ff] text-[#a855f7] rounded-xl flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1f2937]">Database & Optimization</h4>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
              Complete end-to-end integration combining powerful backend systems with performance optimizations for search engines.
            </p>
            <ul className="text-sm text-gray-500 space-y-3 font-medium">
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Database Integration (PostgreSQL)</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Supabase Architecture</li>
              <li className="flex items-center"><span className="text-gray-400 mr-2">•</span> Core Web Vitals Optimization</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;