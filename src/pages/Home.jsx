import React, { useState } from 'react';
//import { supabase } from '../supabaseClient'; 

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name: formData.name, email: formData.email, message: formData.message }]);

    if (error) {
      console.error(error);
      setStatus('Failed to send message.');
    } else {
      setStatus('Message saved securely to cloud database!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* End-to-End Background Color: Clean Slate Gray (bg-gray-50) */}
      
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Stratum IT India</h1>
          <div className="hidden md:flex space-x-6 font-semibold text-gray-600">
            <a href="#services" className="hover:text-blue-700 transition">Services</a>
            <a href="#how-we-work" className="hover:text-blue-700 transition">How We Work</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 text-center px-4 shadow-lg">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Empowering Your Digital Future</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          We provide cutting-edge IT solutions, cloud computing, and web development to scale your business.
        </p>
        <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-md">
          Get in Touch
        </a>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Custom, responsive websites built with React and modern technologies." },
            { title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure and deployment." },
            { title: "IT Consulting", desc: "Expert guidance to navigate your digital transformation journey." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-700 transition">
              <h4 className="text-xl font-bold mb-3 text-blue-700">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work Timeline */}
      <section id="how-we-work" className="bg-white py-20 px-4 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">How We Work</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 shadow-md">1</div>
              <div className="bg-gray-50 p-6 rounded-lg w-full border border-gray-200 hover:border-blue-700 transition">
                <h4 className="font-bold text-lg mb-2 text-blue-700">Discovery & Planning</h4>
                <p className="text-gray-600">Understanding your business needs and mapping out the technical architecture.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shrink-0 shadow-md">2</div>
              <div className="bg-gray-50 p-6 rounded-lg w-full border border-gray-200 hover:border-blue-700 transition">
                <h4 className="font-bold text-lg mb-2 text-blue-700">Development & Testing</h4>
                <p className="text-gray-600">Building the solution using React and rigorous quality assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-3xl mx-auto px-4 text-center">
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