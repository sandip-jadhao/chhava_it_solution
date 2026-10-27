import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Point this to your deployed Express backend URL
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('Message saved securely to PostgreSQL!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Stratum IT India</h1>
          <div className="hidden md:flex space-x-6 font-semibold text-gray-600">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#how-we-work" className="hover:text-blue-700">How We Work</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-24 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Empowering Your Digital Future</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
          We provide cutting-edge IT solutions, cloud computing, and web development to scale your business.
        </p>
        <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
          Get in Touch
        </a>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Custom, responsive websites built with React and modern technologies." },
            { title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure and deployment." },
            { title: "IT Consulting", desc: "Expert guidance to navigate your digital transformation journey." }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h4 className="text-xl font-bold mb-3 text-blue-700">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section Connected to Database */}
      <section id="contact" className="py-20 max-w-3xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
        <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-700 text-white font-bold py-3 rounded-md hover:bg-blue-800 transition">
            Send Message
          </button>
          {status && <p className="text-center mt-4 font-semibold text-blue-700">{status}</p>}
        </form>
      </section>
    </div>
  );
};

export default Home;