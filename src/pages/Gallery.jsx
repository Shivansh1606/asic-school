import { useState, useEffect } from 'react';
import { galleryAPI } from '../services/api';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filters = [
    'All', 'Sports', 'Cultural', 'Academic', 'Events', 
    'Facilities', 'NCC', 'Science', 'Celebrations'
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, [activeFilter]);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = activeFilter === 'All' 
        ? await galleryAPI.getAll()
        : await galleryAPI.getByCategory(activeFilter);
      
      console.log('API Response:', response.data); // Debug
      setGalleryImages(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setError('Failed to load gallery images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to get correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/400x300?text=No+Image';
    
    // If already a full URL, return as is
    if (imagePath.startsWith('http')) return imagePath;
    
    // Remove leading slash if exists
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    
    // Construct full URL
    return `http://localhost:8000/${cleanPath}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">College Gallery</h1>
          <p className="text-white">Home / Gallery</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FDB813]"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={fetchGalleryImages}
              className="mt-4 bg-[#FDB813] text-[#0C2E5C] px-6 py-2 rounded font-semibold hover:bg-[#0C2E5C] hover:text-white transition"
            >
              Retry
            </button>
          </div>
        ) : galleryImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No images found in this category.</p>
            <p className="text-gray-500 mt-2">Please add images from the admin panel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-100">
                <img
                  src={getImageUrl(image.image)}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => {
                    console.error('Image load error:', e.target.src);
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                  onLoad={() => console.log('Image loaded:', getImageUrl(image.image))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                    {image.description && (
                      <p className="text-gray-300 text-xs mt-1">{image.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
