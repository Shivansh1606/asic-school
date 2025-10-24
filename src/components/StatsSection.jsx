import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUserGraduate size={48} />,
      number: '2500+',
      label: 'Students'
    },
    {
      icon: <FaBook size={48} />,
      number: '20',
      label: 'Courses'
    },
    {
      icon: <FaChalkboardTeacher size={48} />,
      number: '50+',
      label: 'Certified Teachers'
    },
    {
      icon: <FaTrophy size={48} />,
      number: '100+',
      label: 'Award Winning'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-[#0C2E5C] mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#0C2E5C] mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
