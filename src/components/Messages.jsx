const Messages = () => {
  const messages = [
    {
      name: 'Dr. Pawan Rastogi',
      designation: 'President',
      photo: 'https://www.shutterstock.com/shutterstock/photos/2436953001/display_1500/stock-photo-portrait-of-senior-mature-rural-indian-man-wearing-traditional-outfit-standing-at-village-home-old-2436953001.jpg',
      message: 'Education is the harmonious development of the physical, mental, spiritual and social faculties. "Our guiding principle is constant change, Motivation and up gradation, creating state-of-the-art knowledge infrastructure for our students, instilling in them the ability to learn so that they can face any challenge anywhere in the world."',
      fallback: 'https://ui-avatars.com/api/?name=Dr+Pawan+Rastogi&size=400&background=0C2E5C&color=FDB813&bold=true'
    },
    {
      name: 'Dr. Raghav Singh',
      designation: 'Secretary',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      message: 'Everyone must read a contract A.S. Inter College has earned reputation among the parent. This college takes pride in being a place where students and faculty can pursue knowledge without boundaries...',
      fallback: 'https://ui-avatars.com/api/?name=Dr+Raghav+Singh&size=400&background=0C2E5C&color=FDB813&bold=true'
    }
  ];

  return (
    <div className="bg-[#0C2E5C] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">MESSAGES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((person, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition">
              {/* Photo Section */}
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  onError={(e) => {
                    console.log(`Image failed for ${person.name}, using fallback`);
                    e.target.src = person.fallback;
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0C2E5C] mb-2">{person.name}</h3>
                <p className="text-[#FDB813] font-semibold text-lg mb-4">{person.designation}</p>
                <p className="text-gray-700 leading-relaxed line-clamp-5">{person.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
