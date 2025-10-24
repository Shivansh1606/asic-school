import Hero from '../components/Hero';
import Messages from '../components/Messages';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div>
      <Hero />
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
              <button className="mt-6 bg-[#FDB813] text-[#0C2E5C] px-6 py-3 rounded font-bold hover:bg-[#0C2E5C] hover:text-white transition">
                Read More
              </button>
            </div>
            <div>
              <img
                src="/about-image.jpg"
                alt="About ASIC"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/0C2E5C/FFFFFF?text=About+ASIC';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Messages />

      {/* Quick Links Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '📋', title: 'DOWNLOAD PAPER', color: 'bg-orange-400' },
              { icon: '📚', title: 'SCIENCE LIBRARY', color: 'bg-yellow-400' },
              { icon: '💼', title: 'COMMERCE', color: 'bg-pink-400' },
              { icon: '🏛️', title: 'TRADITIONAL', color: 'bg-cyan-400' },
              { icon: '⚖️', title: 'MIDDLE LEVEL', color: 'bg-orange-500' }
            ].map((item, index) => (
              <div key={index} className={`${item.color} p-6 rounded-lg text-center hover:scale-105 transition cursor-pointer`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
