import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('camera'); // 'camera', 'laptop', or 'desktop'
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form States
  const [cameraData, setCameraData] = useState({ model: '', description: '', price: '', image_url: '', type: 'Dome' });
  const [laptopData, setLaptopData] = useState({ brand: '', model: '', processor: '', ram: '', storage: '', display: '', price: '', image_url: '', category: 'Business' });
  const [desktopData, setDesktopData] = useState({ brand: '', model: '', processor: '', ram: '', storage: '', form_factor: 'Tower', price: '', image_url: '' });

  // Authentication Check
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) navigate('/admin');
    };
    checkUser();
  }, [navigate]);

  // Submit Handlers
  const handleSubmit = async (e, table, data, setFormFn, defaultState) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from(table).insert([data]);
    setLoading(false);
    
    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage(`${table.charAt(0).toUpperCase() + table.slice(1)} added successfully!`);
      setFormFn(defaultState);
    }
  };

  const handleCameraSubmit = (e) => handleSubmit(e, 'cameras', cameraData, setCameraData, { model: '', description: '', price: '', image_url: '', type: 'Dome' });
  const handleLaptopSubmit = (e) => handleSubmit(e, 'laptops', laptopData, setLaptopData, { brand: '', model: '', processor: '', ram: '', storage: '', display: '', price: '', image_url: '', category: 'Business' });
  const handleDesktopSubmit = (e) => handleSubmit(e, 'desktops', desktopData, setDesktopData, { brand: '', model: '', processor: '', ram: '', storage: '', form_factor: 'Tower', price: '', image_url: '' });

  return (
    <div className="p-8 max-w-5xl mx-auto min-h-screen font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-700">Admin Inventory Dashboard</h2>
          <p className="text-gray-500 mt-1">Manage hardware inventory for CHHAVA IT SOLUTION</p>
        </div>
        <button onClick={() => { supabase.auth.signOut(); navigate('/'); }} className="bg-red-500 text-white px-5 py-2 rounded font-bold hover:bg-red-600 transition shadow">
          Logout
        </button>
      </div>
      
      {/* Status Message */}
      {message && (
        <div className={`mb-6 p-4 rounded font-bold text-center ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      {/* Tabs */}
      <div className="flex flex-col md:flex-row gap-2 mb-8">
        <button onClick={() => { setActiveTab('camera'); setMessage(''); }} className={`px-6 py-3 rounded-lg font-bold transition flex-1 ${activeTab === 'camera' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>📷 Add Camera</button>
        <button onClick={() => { setActiveTab('laptop'); setMessage(''); }} className={`px-6 py-3 rounded-lg font-bold transition flex-1 ${activeTab === 'laptop' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>💻 Add Laptop</button>
        <button onClick={() => { setActiveTab('desktop'); setMessage(''); }} className={`px-6 py-3 rounded-lg font-bold transition flex-1 ${activeTab === 'desktop' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>🖥️ Add Desktop</button>
      </div>
      
      {/* === CAMERA FORM === */}
      {activeTab === 'camera' && (
        <form onSubmit={handleCameraSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mb-2 border-b pb-2">Camera Details</h3>
          <input type="text" placeholder="Model (e.g. CP-UNC-DA41L3C-D-Q2)" value={cameraData.model} onChange={(e) => setCameraData({...cameraData, model: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Description (e.g. 4MP Network IR Dome - 30Mtr)" value={cameraData.description} onChange={(e) => setCameraData({...cameraData, description: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="number" placeholder="Price (₹)" value={cameraData.price} onChange={(e) => setCameraData({...cameraData, price: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <select value={cameraData.type} onChange={(e) => setCameraData({...cameraData, type: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50">
            <option value="Dome">Dome Camera</option>
            <option value="Bullet">Bullet Camera</option>
            <option value="PTZ">PTZ Camera</option>
          </select>
          <div className="md:col-span-2 mt-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">Image Filename (e.g. dome1.png)</label>
            <input type="text" placeholder="Ensure image is inside src/assets/cameras/" value={cameraData.image_url} onChange={(e) => setCameraData({...cameraData, image_url: e.target.value})} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          </div>
          <button type="submit" disabled={loading} className="md:col-span-2 bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 mt-4 shadow-md text-lg">{loading ? 'Saving...' : 'Save Camera to Database'}</button>
        </form>
      )}

      {/* === LAPTOP FORM === */}
      {activeTab === 'laptop' && (
        <form onSubmit={handleLaptopSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mb-2 border-b pb-2">Laptop Specifications</h3>
          <input type="text" placeholder="Brand (e.g. Dell)" value={laptopData.brand} onChange={(e) => setLaptopData({...laptopData, brand: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Model (e.g. Latitude 5400)" value={laptopData.model} onChange={(e) => setLaptopData({...laptopData, model: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Processor (e.g. Intel i5 8th Gen)" value={laptopData.processor} onChange={(e) => setLaptopData({...laptopData, processor: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="RAM (e.g. 8GB)" value={laptopData.ram} onChange={(e) => setLaptopData({...laptopData, ram: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Storage (e.g. 256GB SSD)" value={laptopData.storage} onChange={(e) => setLaptopData({...laptopData, storage: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Display (e.g. 14 inch FHD)" value={laptopData.display} onChange={(e) => setLaptopData({...laptopData, display: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="number" placeholder="Price (₹)" value={laptopData.price} onChange={(e) => setLaptopData({...laptopData, price: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <select value={laptopData.category} onChange={(e) => setLaptopData({...laptopData, category: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50">
            <option value="Business">Business</option>
            <option value="Student">Student</option>
            <option value="Budget">Budget</option>
          </select>
          <div className="md:col-span-2 mt-4">
             <label className="block text-sm font-bold text-gray-700 mb-2">Image Filename (e.g. latitude5400.jpg)</label>
            <input type="text" placeholder="Ensure image is inside src/assets/laptops/" value={laptopData.image_url} onChange={(e) => setLaptopData({...laptopData, image_url: e.target.value})} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          </div>
          <button type="submit" disabled={loading} className="md:col-span-2 bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 mt-4 shadow-md text-lg">{loading ? 'Saving...' : 'Save Laptop to Database'}</button>
        </form>
      )}

      {/* === DESKTOP FORM === */}
      {activeTab === 'desktop' && (
        <form onSubmit={handleDesktopSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="md:col-span-2 text-xl font-bold text-gray-800 mb-2 border-b pb-2">Desktop Specifications</h3>
          <input type="text" placeholder="Brand (e.g. HP / Custom Build)" value={desktopData.brand} onChange={(e) => setDesktopData({...desktopData, brand: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Model (e.g. ProDesk 400 G6)" value={desktopData.model} onChange={(e) => setDesktopData({...desktopData, model: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Processor (e.g. Intel i7 10th Gen)" value={desktopData.processor} onChange={(e) => setDesktopData({...desktopData, processor: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="RAM (e.g. 16GB)" value={desktopData.ram} onChange={(e) => setDesktopData({...desktopData, ram: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="text" placeholder="Storage (e.g. 512GB SSD + 1TB HDD)" value={desktopData.storage} onChange={(e) => setDesktopData({...desktopData, storage: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <input type="number" placeholder="Price (₹)" value={desktopData.price} onChange={(e) => setDesktopData({...desktopData, price: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          <select value={desktopData.form_factor} onChange={(e) => setDesktopData({...desktopData, form_factor: e.target.value})} className="p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50">
            <option value="Tower">Tower Desktop</option>
            <option value="Mini PC">Mini PC</option>
            <option value="All-in-One">All-in-One (AIO)</option>
          </select>
          <div className="md:col-span-2 mt-4">
             <label className="block text-sm font-bold text-gray-700 mb-2">Image Filename (e.g. hp-desktop.png)</label>
            <input type="text" placeholder="Ensure image is inside src/assets/desktops/" value={desktopData.image_url} onChange={(e) => setDesktopData({...desktopData, image_url: e.target.value})} className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-600 bg-gray-50" required />
          </div>
          <button type="submit" disabled={loading} className="md:col-span-2 bg-blue-600 text-white py-4 rounded font-bold hover:bg-blue-700 mt-4 shadow-md text-lg">{loading ? 'Saving...' : 'Save Desktop to Database'}</button>
        </form>
      )}

    </div>
  );
};

export default AdminDashboard;