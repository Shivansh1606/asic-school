import { useState, useEffect } from 'react';
import { activitiesAPI } from '../services/api';

const Activities = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filters = [
    'All', 'Sports', 'Cultural', 'Academic', 'NCC', 
    'Science', 'Social', 'Arts', 'Other'
  ];

  useEffect(() => {
    fetchActivities();
  }, [activeFilter]);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = activeFilter === 'All' 
        ? await activitiesAPI.getAll()
        : await activitiesAPI.getByCategory(activeFilter);
      
      setActivities(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setError('Failed to load activities. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800';
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    return `http://localhost:8000/${cleanPath}`;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Sports': '🏆',
      'Cultural': '🎭',
      'Academic': '📚',
      'NCC': '🎖️',
      'Science': '🔬',
      'Social': '🤝',
      'Arts': '🎨',
      'Other': '✨'
    };
    return icons[category] || '📌';
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">College Activities</h1>
            <p className="text-xl text-gray-200">Engaging Students Beyond Academics</p>
          </div>
          <p className="text-white text-lg">Home / Activities</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white py-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {getCategoryIcon(filter)} {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FDB813]"></div>
            <p className="mt-4 text-gray-600">Loading activities...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={fetchActivities}
              className="mt-4 bg-[#FDB813] text-[#0C2E5C] px-6 py-2 rounded font-semibold hover:bg-[#0C2E5C] hover:text-white transition"
            >
              Retry
            </button>
          </div>
        ) : activities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No activities found in this category.</p>
            <p className="text-gray-500 mt-2">Please add activities from the admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
                {/* Activity Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImageUrl(activity.image)}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800';
                    }}
                  />
                  {activity.is_featured && (
                    <div className="absolute top-4 right-4 bg-[#FDB813] text-[#0C2E5C] px-3 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-[#0C2E5C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {getCategoryIcon(activity.category)} {activity.category}
                  </div>
                </div>

                {/* Activity Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C2E5C] mb-2 hover:text-[#FDB813] transition">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {activity.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FDB813]">📅</span>
                      <span className="font-semibold">Date:</span>
                      <span>{formatDate(activity.date)}</span>
                    </div>

                    {activity.venue && (
                      <div className="flex items-center gap-2">
                        <span className="text-[#FDB813]">📍</span>
                        <span className="font-semibold">Venue:</span>
                        <span>{activity.venue}</span>
                      </div>
                    )}

                    {activity.participants && (
                      <div className="flex items-center gap-2">
                        <span className="text-[#FDB813]">👥</span>
                        <span className="font-semibold">Participants:</span>
                        <span>{activity.participants}</span>
                      </div>
                    )}
                  </div>

                  {/* Read More Button */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Participate?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join us in our upcoming activities and events
          </p>
          <button className="bg-[#FDB813] text-[#0C2E5C] px-8 py-3 rounded-lg font-bold hover:bg-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
