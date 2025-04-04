import React from 'react';
import { Link } from 'react-router-dom';
import submit from "../assets/submit.png";

const SubmitPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <img src={submit} alt="submit image" className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-4">Submission Successful!</h2>
        <p className="text-gray-700 mb-6">Thank you for your submission. We will get back to you soon!</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SubmitPage;
