const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-white">Home / About Us</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#0C2E5C] mb-6">About Us</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Our guiding principle is constant change, Motivation and up gradation, creating state-of-the-art 
              knowledge infrastructure for our students, instilling in them the ability to learn so that they can face 
              any challenge anywhere in the world.
            </p>
            <p>
              Education is the harmonious development of the physical, mental, spiritual and social faculties. 
              It is the process of awakening the thirst for knowledge and kindling the inquisitive spirit that 
              lead to the overall development of students.
            </p>
            <p>
              We have inherited the great spirits of our pioneers to carry their legacy forward, the legacy of 
              imparting education that prepares the students intellectually for mature life. An effective educational 
              system should have a holistic approach that prepares the students for the workforce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
