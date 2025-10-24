const Course = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Courses</h1>
          <p className="text-white">Home / Course</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-[#0C2E5C] mb-8">
            CLASS 6th to CLASS 12th (HINDI & ENGLISH MEDIUM)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-center text-[#0C2E5C] mb-4">Streams Available:</h3>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">SCIENCE GROUP</h4>
              <p className="text-gray-700">(PHYSICS, CHEMISTRY, MATHEMATICS, BIOLOGY)</p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">COMMERCE</h4>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">HUMANITIES</h4>
              <p className="text-gray-700">
                (HINDI, ENGLISH, GEOGRAPHY, HISTORY, CIVICS, ECONOMICS, EDUCATION, DRAWING, HOME SCIENCE, SANSKRIT)
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">TRADITIONAL - COLOURED PHOTOGRAPHY, AUDIT</h4>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">AGRICALTLURE</h4>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#0C2E5C] mb-2">DIPLOMA AND WORKSHOP IN SPACE SCIENCE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
