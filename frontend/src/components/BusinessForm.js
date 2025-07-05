import React, { useState } from 'react';

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || location.trim() === '') {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    onSubmit(name, location);
    setName('');
    setLocation('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
        Enter Business Details
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Business Name
        </label>
        <input
          type="text"
          value={name}
          placeholder="e.g. Cake & Co"
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Location
        </label>
        <input
          type="text"
          value={location}
          placeholder="e.g. Mumbai"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
      >
        Submit
      </button>
    </form>
  );
}

export default BusinessForm;
