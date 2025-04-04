import React, { useState, useEffect } from 'react';

const RequestDemoForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    message: ''
  });
  
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeForm();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'visible';
    };
  }, [closeForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    
    // Show success message or redirect
    alert('Thank you for your interest! We will contact you shortly.');
    closeForm();
  };

  // Close modal when clicking outside the form
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-md max-w-4xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeForm}
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Form title */}
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Request Demo</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Name field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            {/* Email field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            {/* Phone Number field */}
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="mb-1 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            {/* Company Name field */}
            <div className="flex flex-col">
              <label htmlFor="companyName" className="mb-1 font-medium">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          
          {/* Message field */}
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="mb-1 font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          {/* Submit button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-purple-800 text-white font-medium py-3 px-6 rounded hover:bg-purple-900 transition duration-300 flex-grow md:flex-grow-0"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="border border-gray-300 text-gray-700 font-medium py-3 px-6 rounded hover:bg-gray-100 transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoForm;