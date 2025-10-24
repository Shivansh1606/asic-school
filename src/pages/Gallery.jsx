import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Farewell', 'NCC', 'Scout', 'Events', 'English Mediam', 'Parents Meeting',
    'Amrit Mohatsav', 'Exam', 'Games', 'Science', 'Sadan', 'News Paper', 'School',
    'PTA', 'Traning', 'Day', 'Eco Club', 'Cultural', 'Social Media', 'Road Safety'
  ];

  const galleryImages = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    src: `/gallery/image${i + 1}.jpg`,
    category: filters[Math.floor(Math.random() * filters.length)]
  }));

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
                    ? 'bg-[#FDB813] text-[#0C2E5C]'
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages
            .filter(img => activeFilter === 'All' || img.category === activeFilter)
            .map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/0C2E5C/FFFFFF?text=Gallery+${image.id}`;
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-lg font-bold">
                    View Image
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
