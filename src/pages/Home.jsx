import Hero from '../components/Hero';
import Messages from '../components/Messages';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Overlapping Cards */}
      <div className="relative">
        <Hero />
        
        {/* Overlapping Quick Links Cards - SMALLER SIZE */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { 
                  icon: '📋', 
                  title: 'SCIENCE GROUP', 
                  color: 'from-yellow-400 to-yellow-500',
                  iconBg: 'bg-white'
                },
                { 
                  icon: '💼', 
                  title: 'COMMERCE', 
                  color: 'from-pink-400 to-pink-500',
                  iconBg: 'bg-white'
                },
                { 
                  icon: '⚖️', 
                  title: 'TRADITIONAL', 
                  color: 'from-cyan-400 to-cyan-500',
                  iconBg: 'bg-white'
                },
                { 
                  icon: '🌾', 
                  title: 'AGRICULTURE', 
                  color: 'from-orange-400 to-orange-500',
                  iconBg: 'bg-white'
                },
                { 
                  icon: '📚', 
                  title: 'SCIENCE GROUP', 
                  color: 'from-yellow-400 to-yellow-500',
                  iconBg: 'bg-white'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${item.color} p-5 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl`}
                >
                  <div className={`${item.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra spacing - REDUCED */}
      <div className="pt-24"></div>

      <StatsSection />
      
      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0C2E5C] mb-4">About Us</h2>
            <div className="w-20 h-1 bg-[#FDB813] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our guiding principle is constant change, Motivation and up gradation, creating state-of-the-art 
                knowledge infrastructure for our students, instilling in them the ability to learn so that they can face 
                any challenge anywhere in the world.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Education is the harmonious development of the physical, mental, spiritual and social faculties. 
                It is the process of awakening the thirst for knowledge and kindling the inquisitive spirit that 
                lead to the overall development of students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have inherited the great spirits of our pioneers to carry their legacy forward, the legacy of 
                imparting education that prepares the students intellectually for mature life.
              </p>
              <button className="mt-6 bg-[#FDB813] text-[#0C2E5C] px-6 py-3 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition-all shadow-lg">
                Read More
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="About ASIC - Students in Classroom"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'https://source.unsplash.com/800x600/?students,classroom';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Messages />

      {/* Bottom Quick Links Section - SMALLER SIZE */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0C2E5C] mb-12">Quick Access</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
