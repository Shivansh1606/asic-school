import { useState } from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';

const Activities = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'all';
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All', 'Sports', 'Cultural', 'Academic', 'Social Service', 
    'NCC', 'Scout & Guide', 'Science Exhibition', 'Annual Function',
    'Independence Day', 'Republic Day', 'Teachers Day', 'Competitions'
  ];

  const activitiesData = [
    {
      id: 1,
      title: 'Annual Sports Day 2024',
      category: 'Sports',
      date: '15 March 2024',
      location: 'College Ground',
      time: '9:00 AM - 4:00 PM',
      description: 'Annual Sports Day celebration with various athletic competitions including running, long jump, high jump, and team sports.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
      participants: '500+',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Cultural Fest - Kala Utsav',
      category: 'Cultural',
      date: '20 February 2024',
      location: 'Main Auditorium',
      time: '10:00 AM - 5:00 PM',
      description: 'Students showcased their talents in dance, music, drama, and art. Traditional and modern performances were presented.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      participants: '300+',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Science Exhibition 2024',
      category: 'Science Exhibition',
      date: '10 January 2024',
      location: 'Science Block',
      time: '9:00 AM - 3:00 PM',
      description: 'Students presented innovative science projects and experiments. Demonstrations on robotics, chemistry, and physics.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
      participants: '200+',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Independence Day Celebration',
      category: 'Independence Day',
      date: '15 August 2024',
      location: 'School Campus',
      time: '8:00 AM - 11:00 AM',
      description: 'Flag hoisting ceremony followed by patriotic songs, speeches, and cultural programs celebrating Indian independence.',
      image: 'https://images.unsplash.com/photo-1562601579-599dec564e06?w=600&q=80',
      participants: '1000+',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Teachers Day Celebration',
      category: 'Teachers Day',
      date: '5 September 2024',
      location: 'Main Hall',
      time: '10:00 AM - 2:00 PM',
      description: 'Students organized special programs to honor and appreciate teachers. Fun games, performances, and awards ceremony.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      participants: '400+',
      status: 'completed'
    },
    {
      id: 6,
      title: 'NCC Training Camp',
      category: 'NCC',
      date: '1-7 December 2024',
      location: 'NCC Ground',
      time: 'Full Day',
      description: '7-day intensive NCC training camp covering drill, rifle training, parade, and physical fitness activities.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
      participants: '150+',
      status: 'completed'
    },
    {
      id: 7,
      title: 'Republic Day Parade',
      category: 'Republic Day',
      date: '26 January 2024',
      location: 'Main Campus',
      time: '8:00 AM - 11:00 AM',
      description: 'Grand parade ceremony with students march-past, cultural performances, and speeches on Constitution of India.',
      image: 'https://images.unsplash.com/photo-1562601579-599dec564e06?w=600&q=80',
      participants: '800+',
      status: 'completed'
    },
    {
      id: 8,
      title: 'Inter-School Quiz Competition',
      category: 'Competitions',
      date: '18 November 2024',
      location: 'Conference Hall',
      time: '11:00 AM - 3:00 PM',
      description: 'Regional level quiz competition on general knowledge, current affairs, and academic subjects.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      participants: '80+',
      status: 'completed'
    },
    {
      id: 9,
      title: 'Blood Donation Camp',
      category: 'Social Service',
      date: '5 October 2024',
      location: 'Medical Room',
      time: '9:00 AM - 4:00 PM',
      description: 'Social service initiative in collaboration with local blood bank. Students and staff donated blood.',
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&q=80',
      participants: '100+',
      status: 'completed'
    },
    {
      id: 10,
      title: 'Annual Function 2024',
      category: 'Annual Function',
      date: '15 December 2024',
      location: 'Main Auditorium',
      time: '5:00 PM - 9:00 PM',
      description: 'Grand annual function with prize distribution, cultural performances, guest speeches, and student achievements.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80',
      participants: '1500+',
      status: 'upcoming'
    },
    {
      id: 11,
      title: 'Scout & Guide Camp',
      category: 'Scout & Guide',
      date: '20-22 October 2024',
      location: 'Camping Ground',
      time: '3 Days',
      description: 'Outdoor camping activities including tent pitching, first aid training, survival skills, and nature exploration.',
      image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80',
      participants: '120+',
      status: 'completed'
    },
    {
      id: 12,
      title: 'Academic Excellence Award Ceremony',
      category: 'Academic',
      date: '30 March 2024',
      location: 'Main Hall',
      time: '11:00 AM - 2:00 PM',
      description: 'Recognition and award ceremony for students who excelled in board exams and academic competitions.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
      participants: '250+',
      status: 'completed'
    }
  ];

  const filteredActivities = activeCategory === 'All' 
    ? activitiesData 
    : activitiesData.filter(activity => activity.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
            alt="Activities"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">College Activities</h1>
            <p className="text-xl text-gray-200">Engaging Students in Learning & Development</p>
          </div>
          <p className="text-white text-lg">Home / Activities</p>
        </div>
      </div>

      {/* Category Filter Section */}
      <div className="bg-white py-8 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0C2E5C] text-center mb-6">
            Browse Activities by Category
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Grid Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-[#0C2E5C]">{filteredActivities.length}</span> activities
              {activeCategory !== 'All' && (
                <span> in <span className="font-bold text-[#FDB813]">{activeCategory}</span></span>
              )}
            </p>
          </div>

          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                          activity.status === 'completed'
                            ? 'bg-green-500 text-white'
                            : 'bg-[#FDB813] text-[#0C2E5C]'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#0C2E5C] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                        {activity.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0C2E5C] mb-3 group-hover:text-[#FDB813] transition">
                      {activity.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaCalendar className="text-[#FDB813] mr-2 flex-shrink-0" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-[#FDB813] mr-2 flex-shrink-0" />
                        <span>{activity.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <FaClock className="text-[#FDB813] mr-2 flex-shrink-0" />
                        <span>{activity.time}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                      {activity.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <span className="text-[#0C2E5C] font-bold text-lg">{activity.participants}</span>
                        <span className="text-gray-500 text-sm ml-2">Participants</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Activities Found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-6 bg-[#FDB813] text-[#0C2E5C] px-6 py-3 rounded-lg font-semibold hover:bg-[#0C2E5C] hover:text-white transition"
              >
                Show All Activities
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#0C2E5C] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Activity Statistics 2024
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FDB813] mb-2">50+</div>
              <p className="text-gray-300 text-lg">Total Activities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FDB813] mb-2">5000+</div>
              <p className="text-gray-300 text-lg">Total Participants</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FDB813] mb-2">15+</div>
              <p className="text-gray-300 text-lg">Categories</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#FDB813] mb-2">100+</div>
              <p className="text-gray-300 text-lg">Awards Won</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#FDB813] to-[#ffc44d] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0C2E5C] mb-4">
            Want to Participate in Our Activities?
          </h2>
          <p className="text-[#0C2E5C] text-lg mb-8">
            Join us in various extracurricular activities and develop your skills beyond academics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0C2E5C] text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#0C2E5C] transition">
              Register Now
            </button>
            <button className="bg-white text-[#0C2E5C] px-8 py-4 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
