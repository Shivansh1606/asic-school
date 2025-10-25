import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All', 'Sports', 'Cultural', 'Academic', 'Events', 'Facilities', 
    'NCC', 'Science', 'Celebrations'
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      category: 'Sports',
      title: 'Annual Sports Day'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      category: 'Cultural',
      title: 'Cultural Fest'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
      category: 'Science',
      title: 'Science Exhibition'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
      category: 'Academic',
      title: 'Classroom Learning'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1562601579-599dec564e06?w=800&q=80',
      category: 'Events',
      title: 'Independence Day'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
      category: 'Facilities',
      title: 'College Library'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      category: 'NCC',
      title: 'NCC Training'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
      category: 'Celebrations',
      title: 'Teachers Day'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      category: 'Academic',
      title: 'Student Achievement'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      category: 'Facilities',
      title: 'Computer Lab'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      category: 'Academic',
      title: 'Group Study'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
      category: 'Events',
      title: 'Annual Function'
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
