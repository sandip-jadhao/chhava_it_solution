import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
     <div className="bg-gray-50 flex-grow w-full px-4 sm:px-6 lg:px-8 py-12 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Web Development Services</h1>
        <p className="text-gray-600 mb-6 text-lg">
          We build custom, high-performance, and responsive websites tailored to your business needs using React, Tailwind CSS, and modern web technologies.
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">What We Offer:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
          <li>Custom React Application Development</li>
          <li>E-commerce Solutions</li>
          <li>Database Integration (PostgreSQL, Supabase)</li>
          <li>Performance Optimization & SEO</li>
        </ul>
        <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition shadow-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;