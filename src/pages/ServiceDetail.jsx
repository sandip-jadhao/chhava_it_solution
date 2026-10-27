import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const formattedTitle = serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-md max-w-2xl w-full text-center border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">{formattedTitle}</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Detailed information, hardware specifications, and pricing for our {formattedTitle} offerings will be displayed here.
        </p>
        <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition shadow-md inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;