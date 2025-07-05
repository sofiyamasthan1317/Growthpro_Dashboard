import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [headline, setHeadline] = useState('');

  const handleSubmit = async (name, location) => {
    setLoading(true);
    try {
      const response = await fetch('https://growthpro-dashboard-backend.onrender.com/business-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, location }),
      });

      const data = await response.json();
      setFormData({ name, location, rating: data.rating, reviews: data.reviews });
      setHeadline(data.headline);
    } catch (error) {
      console.error('Error fetching business data:', error);
    }
    setLoading(false);
  };

  const handleRegenerate = async () => {
  if (!formData) return;

  try {
    const response = await fetch(`https://growthpro-dashboard-backend.onrender.com/regenerate-headline?name=${formData.name}&location=${formData.location}`);

    const data = await response.json();
    setHeadline(data.headline);
  } catch (error) {
    console.error('Error regenerating headline:', error);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-700">
          GrowthProAI – Local Business Dashboard
        </h1>

        <BusinessForm onSubmit={handleSubmit} />

        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        )}

        {formData && !loading && (
          <BusinessCard
            rating={formData.rating}
            reviews={formData.reviews}
            headline={headline}
            onRegenerate={handleRegenerate}
          />
        )}
      </div>
    </div>
  );
}

export default App;
