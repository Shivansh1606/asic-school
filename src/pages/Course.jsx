const Course = () => {
  const courses = {
    class10: {
      title: "Class 10th (High School)",
      streams: [
        {
          name: "General Education",
          subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science", "Sanskrit/Urdu"],
          description: "Comprehensive curriculum preparing students for board examinations"
        }
      ]
    },
    class12: {
      title: "Class 12th (Intermediate)",
      streams: [
        {
          name: "Science Stream",
          subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Physical Education"],
          description: "For students aspiring for engineering, medical, and science careers"
        },
        {
          name: "Commerce Stream",
          subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Computer Science"],
          description: "For students interested in business, finance, and commerce fields"
        },
        {
          name: "Arts Stream",
          subjects: ["History", "Political Science", "Geography", "Economics", "Hindi", "English"],
          description: "For students pursuing humanities, social sciences, and creative fields"
        }
      ]
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Class 10th & 12th Programs</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive education programs aligned with UP Board curriculum, designed to build strong foundations and bright futures.
        </p>
        
        {/* Class 10th */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{courses.class10.title}</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {courses.class10.streams.map((stream, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-primary mb-4">{stream.name}</h3>
                <p className="text-gray-600 mb-4">{stream.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stream.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center bg-blue-50 p-4 rounded-lg">
                      <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class 12th */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{courses.class12.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.class12.streams.map((stream, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className={`p-6 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{stream.name}</h3>
                  <p className="text-white/90 text-sm">{stream.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Subjects Offered:</h4>
                  <div className="space-y-2">
                    {stream.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Programs?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Experienced Faculty</h4>
              <p className="text-gray-600 text-sm">Highly qualified teachers with years of expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">95% Success Rate</h4>
              <p className="text-gray-600 text-sm">Excellent board examination results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Modern Labs</h4>
              <p className="text-gray-600 text-sm">Well-equipped science and computer labs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rich Library</h4>
              <p className="text-gray-600 text-sm">Extensive collection of books and resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
