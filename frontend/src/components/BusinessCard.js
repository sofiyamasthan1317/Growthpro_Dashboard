import React from 'react';

function BusinessCard({ rating, reviews, headline, onRegenerate }) {
  return (
    <div className="bg-white mt-6 p-6 rounded-xl shadow-md w-full max-w-md mx-auto text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Business Insights
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4 sm:gap-0">
        <div>
          <p className="text-gray-600 text-sm">Rating</p>
          <p className="text-yellow-500 text-2xl font-bold">{rating}★</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Reviews</p>
          <p className="text-green-600 text-2xl font-bold">{reviews}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-500 text-sm mb-1">SEO Headline</p>
        <p className="text-base font-medium text-gray-800 px-2">{headline}</p>
      </div>

      <button
        onClick={onRegenerate}
        className="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;
