import React, { useState } from 'react';
import infochips from '../assets/infochips-opt-256.webp';
import opt from '../assets/L&T-opt-384.webp';
import SASKEN from '../assets/SASKEN-opt-256.webp';
import sgAnalytics from '../assets/sgAnalytics-opt-256.webp';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Moves to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      navigate("/submit");
    }
  };

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Update form data on change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  // Check if all fields are filled
  const isFormFilled = Object.values(formData).every((field) => field.trim() !== '');

  return (
    <main className="flex-grow bg-white">
      <button 
        onClick={handleBack} 
        className="text-purple-800 hover:text-purple-600 p-2 text-3xl" 
        aria-label="Go back"
      >
        ← 
      </button>

      {/* Clients Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-8">Our Clients</h2>
          <p className="text-center text-gray-600 mb-12">Trusted by top companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[opt, SASKEN, sgAnalytics, infochips].map((img, index) => (
              <div key={index} className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src={img} alt="Client Logo" className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero and Form Section */}
      <section className="px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-purple-800 text-white p-8 rounded">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock the untapped potential of your business with the transformative capabilities of AI.
            </h1>
            <p className="text-lg mb-6">
              From automating repetitive tasks to optimizing decision-making through advanced analytics, Shodat AI solutions is the key to scalability and innovation.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6">Scheduling a meeting</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-1">Company name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`px-6 py-2 rounded text-white ${
                    isFormFilled ? 'bg-purple-700 hover:bg-purple-800' : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  disabled={!isFormFilled}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
