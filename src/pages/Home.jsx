import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import laptopHeroImage from '../assets/laptops/hp.jpg';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const { error: dbError } = await supabase
        .from('contacts')
        .insert([{ name: formData.name, email: formData.email, message: `Phone: ${formData.phone} | Msg: ${formData.message}` }]);

      if (dbError) throw dbError;

      await emailjs.send(
        'service_rdnswc9',
        'template_kt20el9',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'yLMfQRVv-liVq4FrV'
      );

      setStatus('Message sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message. Please try again or use WhatsApp.');
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#001233] text-white">
        
        {/* Background Image Overlay (Shivaji Maharaj / Raigad styling) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2070" 
            alt="Historical Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001233] via-[#001233]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 md:py-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="pr-4 lg:pr-12">
            <p className="text-[#00d2ff] font-semibold tracking-[0.2em] text-xs mb-6 uppercase">Trust • Technology • Growth</p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Empowering Your <br/><span className="text-[#00d2ff]">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 font-light max-w-lg leading-relaxed">
              Smart IT solutions, networking, CCTV, hardware, web development and business software to help your business grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link to="/#contact" className="bg-gradient-to-r from-[#0055ff] to-[#00aaff] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,170,255,0.4)] transition-all flex items-center justify-center gap-2">
                Get a Free Quote <span>→</span>
              </Link>
              <Link to="/#services" className="bg-transparent border-2 border-gray-400 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white hover:text-[#001233] hover:border-white transition-all flex items-center justify-center gap-2">
                <span className="text-xl">▶</span> Explore Services
              </Link>
            </div>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="text-[#00d2ff] text-2xl border border-[#00d2ff]/30 p-2 rounded-lg">🛡️</div>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide leading-tight">Reliable<br/>Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#00d2ff] text-2xl border border-[#00d2ff]/30 p-2 rounded-lg">⚙️</div>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide leading-tight">Expert<br/>Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#00d2ff] text-2xl border border-[#00d2ff]/30 p-2 rounded-lg">📈</div>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide leading-tight">Business<br/>Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[#00d2ff] text-2xl border border-[#00d2ff]/30 p-2 rounded-lg">⏱️</div>
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide leading-tight">On-Time<br/>Service</span>
              </div>
            </div>
          </div>

          {/* Right: Hardware Showcase Image */}
          <div className="hidden lg:flex justify-center items-center relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop" 
              alt="Hardware Solutions"
              className="max-w-[110%] h-auto -mt-24 object-contain drop-shadow-2xl opacity-90 rounded-2xl border border-white/10 relative z-20" 
            />
          </div>
        </div>
      </section>

      {/* 2. Simplified Clean Section (Matches image_e6935c.png vibe) */}

      {/* 3. Core Services Grid (Matching white background layout) */}
      <section id="services" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-8">
        <div className="text-center mb-16 relative">
          <div className="flex justify-center items-center gap-4 mb-3">
             <div className="h-px bg-blue-300 w-16"></div>
             <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Services</p>
             <div className="h-px bg-blue-300 w-16"></div>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#001a4d] mb-4">Complete IT Solutions <span className="text-blue-600">Under One Roof</span></h3>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">From infrastructure to software, we provide end-to-end IT solutions to help your business grow.</p>
        </div>
        
        {/* Service Cards (Horizontal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          
          <Link to="/services/web-development" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500" alt="Web Dev" className="object-contain h-full mix-blend-multiply"/>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">{'</>'}</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">Web Development</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">Custom, responsive websites and web applications for your business.</p>
            <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

          <Link to="/services/cctv-security" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500" alt="CCTV" className="object-contain h-full mix-blend-multiply"/>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">🛡️</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">CCTV & Security</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">Advanced surveillance systems to ensure complete safety and security.</p>
            <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

          <Link to="/services/refurbished-laptops" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
             <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500" alt="Laptops" className="object-contain h-full mix-blend-multiply"/>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">💻</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">Laptops & Desktops</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">High-quality, tested and certified laptops and desktops for budget-friendly computing.</p>
            <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

          <Link to="/services/networking" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500" alt="Networking" className="object-contain h-full mix-blend-multiply"/>
            </div>
             <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">🖧</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">Networking</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">Robust and secure networking setups to keep your business connected.</p>
             <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

           <Link to="/services/it-consulting" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
            <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" alt="ERP" className="object-contain h-full mix-blend-multiply"/>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">📊</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">ERP & Inventory</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">Custom business software for inventory, ERP and department management.</p>
             <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

          <Link to="/services/it-accessories" className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col group hover:-translate-y-2 hover:shadow-xl transition duration-300">
             <div className="h-32 mb-6 flex justify-center items-center">
               <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500" alt="Support" className="object-contain h-full mix-blend-multiply"/>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">🛠️</div>
              <h4 className="text-lg font-bold text-[#001a4d] leading-tight">IT Support & AMC</h4>
            </div>
            <p className="text-gray-500 text-xs mb-4 flex-grow">Ongoing IT support and annual maintenance for uninterrupted operations.</p>
             <div className="text-blue-600 flex justify-end"><span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition">→</span></div>
          </Link>

        </div>
      </section>

      {/* About & Contact Dual Section */}
      <section id="contact" className="bg-[#001a4d] text-white py-16 scroll-mt-0">
        {/* ... (Keep the exact same About & Contact section from the previous response) ... */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: About Text & Stats */}
          <div>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">About CHHAVA IT SOLUTION</p>
            <h3 className="text-4xl font-extrabold mb-6">Your Trusted <span className="text-[#00d2ff]">IT Partner</span></h3>
            <p className="text-gray-300 mb-10 leading-relaxed font-light text-lg">
              CHHAVA IT SOLUTION is a technology-driven company based in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. We provide end-to-end IT solutions including networking, CCTV, laptops, software development, ERP and IT support to help businesses grow, become more secure, and stay ahead in the digital world.
            </p>
            
            <Link to="/#services" className="bg-[#0055ff] text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition inline-block mb-10 shadow-lg">
              Learn More →
            </Link>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-blue-800">
              <div className="flex items-center gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">⭐</div>
                <div>
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎧</div>
                <div>
                  <div className="text-2xl font-bold text-white">24×7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
               <div className="flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <div className="text-lg font-bold text-white leading-tight">Local Support</div>
                  <div className="text-sm text-gray-400">in Chhatrapati Sambhajinagar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl shadow-2xl p-8 lg:p-10 text-gray-800">
            <h3 className="text-2xl font-extrabold mb-2 text-[#003399]">Get in Touch</h3>
            <p className="text-gray-500 mb-8 text-sm">Let's discuss your requirement. We will get back to you soon.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                   <span className="absolute left-3 top-3 text-gray-400">👤</span>
                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="pl-10 p-3 border border-gray-200 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 text-sm" />
                </div>
                <div className="relative">
                   <span className="absolute left-3 top-3 text-gray-400">📞</span>
                   <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required className="pl-10 p-3 border border-gray-200 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 text-sm" />
                </div>
              </div>
              <div className="relative">
                 <span className="absolute left-3 top-3 text-gray-400">✉️</span>
                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="pl-10 p-3 border border-gray-200 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 text-sm" />
              </div>
              <div className="relative">
                 <span className="absolute left-3 top-3 text-gray-400">💬</span>
                 <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required className="pl-10 p-3 border border-gray-200 rounded-md w-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 text-sm resize-none"></textarea>
              </div>
              
              <button type="submit" className="bg-[#0055ff] text-white font-bold py-3.5 rounded-md hover:bg-blue-700 transition shadow-md w-full mt-2">
                Send Enquiry →
              </button>
              
              {status && (
                <p className={`text-center mt-3 font-semibold text-sm ${status.includes('Failed') ? 'text-red-500' : 'text-green-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;