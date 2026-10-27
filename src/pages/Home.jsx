import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  
  // Gets the current URL hash (e.g., "#services" or "#contact")
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If a hash exists, find the element and smoothly scroll to it
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash exists, go to the very top of the page
      window.scrollTo(0, 0);
    }
  }, [hash]); // This hook runs every time the URL hash changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Supabase logic can be re-enabled here
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 text-center px-4 shadow-lg">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Empowering Your Digital Future</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          We provide cutting-edge IT solutions, hardware, and web development to scale your business.
        </p>
        <Link to="/#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-md">
          Get in Touch
        </Link>
      </section>

      {/* Services Grid (Added scroll-mt-24 to prevent header overlap) */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 scroll-mt-8">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Web Development", desc: "Custom, responsive websites built with React and modern technologies.", path: "/services/web-development" },
            { title: "IT Consulting", desc: "Expert guidance to navigate your digital transformation journey.", path: "/services/it-consulting" },
            { title: "Refurbished Laptops", desc: "High-quality, tested, and certified refurbished laptops for budget-friendly computing.", path: "/services/refurbished-laptops" },
            { title: "Networking", desc: "Robust and secure networking setups to keep your business connected.", path: "/services/networking" },
            { title: "CCTV Security", desc: "Advanced surveillance systems to ensure the safety and security of your premises.", path: "/services/cctv-security" },
            { title: "IT Accessories", desc: "A comprehensive range of computer peripherals and accessories for daily operations.", path: "/services/it-accessories" }
          ].map((service, index) => (
            <Link to={service.path} key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-700 transition flex flex-col cursor-pointer block">
              <h4 className="text-xl font-bold mb-3 text-blue-700">{service.title}</h4>
              <p className="text-gray-600 flex-grow">{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Work Timeline (Added scroll-mt-24) */}
      <section id="how-we-work" className="bg-white py-20 px-4 border-t border-b border-gray-200 scroll-mt-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How We Work</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 shadow-md">1</div>
              <div className="bg-gray-50 p-6 rounded-lg w-full border border-gray-200 hover:border-blue-700 transition">
                <h4 className="font-bold text-lg mb-2 text-blue-700">Discovery & Planning</h4>
                <p className="text-gray-600">Understanding your business needs and mapping out the technical or hardware architecture.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 shadow-md">2</div>
              <div className="bg-gray-50 p-6 rounded-lg w-full border border-gray-200 hover:border-blue-700 transition">
                <h4 className="font-bold text-lg mb-2 text-blue-700">Deployment & Delivery</h4>
                <p className="text-gray-600">Implementing the software solution or installing the hardware with rigorous quality assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Added scroll-mt-24) */}
      <section id="contact" className="py-20 max-w-3xl mx-auto px-4 text-center scroll-mt-0">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your Project?</h3>
        <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-700 bg-gray-50" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-700 bg-gray-50" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-700 bg-gray-50"></textarea>
          <button type="submit" className="bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition shadow-md">
            Send Message
          </button>
          {status && <p className="text-center mt-4 font-semibold text-blue-700">{status}</p>}
        </form>
      </section>

    </div>
  );
};

export default Home;