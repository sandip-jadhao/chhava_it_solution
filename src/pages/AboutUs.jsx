import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Ensure the page loads at the very top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 flex-grow w-full font-sans pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-[#001a4d] text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About <span className="text-[#00d2ff]">CHHAVA IT SOLUTION</span></h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
          Your Trusted IT Partner for a Smart Tomorrow.
        </p>
      </section>

      {/* 2. Main Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</p>
              <h2 className="text-3xl font-extrabold text-[#001a4d] mb-6">Empowering Modern Businesses in Maharashtra</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Located in the heart of <strong>Chhatrapati Sambhajinagar (Aurangabad), Maharashtra</strong>, CHHAVA IT SOLUTION is a premier, technology-driven company dedicated to scaling businesses through innovative IT infrastructure and software development.
                </p>
                <p>
                  With over <strong>5+ years of industry experience</strong> and a portfolio of <strong>100+ happy clients</strong>, we specialize in delivering end-to-end solutions. Whether you require a custom React web application, robust native Android apps, or comprehensive Full Stack architectures (API Integration, PostgreSQL, Supabase), our expert developers bring your vision to life.
                </p>
                <p>
                  Beyond software, we are your reliable local hardware provider. We supply certified refurbished laptops, design secure CCTV surveillance systems, configure robust office networking setups, and offer custom ERP/Inventory software—all backed by our dedicated 24×7 support.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/#contact" className="bg-[#0055ff] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-md inline-block">
                  Let's Discuss Your Project →
                </Link>
              </div>
            </div>

            {/* Stats / Highlight Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                <div className="text-4xl mb-2">👥</div>
                <div className="text-3xl font-black text-[#001a4d]">100+</div>
                <div className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-3xl font-black text-[#001a4d]">5+</div>
                <div className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                <div className="text-4xl mb-2">🎧</div>
                <div className="text-2xl font-black text-[#001a4d]">24×7</div>
                <div className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wider">Dedicated Support</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100 flex flex-col justify-center items-center">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-lg font-black text-[#001a4d] leading-tight">Aurangabad</div>
                <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">Maharashtra Hub</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-[#001a4d] mb-4">Why Choose Us?</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">We follow a strict, agile development lifecycle to ensure high-quality delivery for every project.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#0055ff] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-md">🛡️</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Trust & Reliability</h4>
            <p className="text-gray-600 text-sm">We build long-lasting relationships by providing secure, dependable hardware and software solutions you can count on.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#0055ff] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-md">⚙️</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Modern Technology</h4>
            <p className="text-gray-600 text-sm">From React SPAs to advanced IP camera networks, we leverage cutting-edge tech to keep you ahead of the curve.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#0055ff] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-md">📈</div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Business Growth</h4>
            <p className="text-gray-600 text-sm">Our goal is your success. We design custom ERPs and digital platforms specifically engineered to scale your operations.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;