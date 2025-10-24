const Messages = () => {
  const messages = [
    {
      name: 'Dr. Pawan Rastogi',
      designation: 'President',
      image: '/president.jpg',
      message: 'Education is the harmonious development of the physical, mental, spiritual and social faculties. "Our guiding principle is constant change, Motivation and up gradation, creating state-of-the-art knowledge infrastructure for our students, instilling in them the ability to learn so that they can face any challenge anywhere in the world."'
    },
    {
      name: 'Dr. Raghav Singh',
      designation: 'Secretary',
      image: '/secretary.jpg',
      message: 'Everyone must read a contract A.S. Inter College has earned reputation among the parent. This college takes pride in being a place where students and faculty can pursue knowledge without boundaries...'
    }
  ];

  return (
    <div className="bg-[#0C2E5C] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">MESSAGES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-start space-x-4">
                <img
                  src={msg.image}
                  alt={msg.name}
                  className="w-24 h-24 rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/96x96/0C2E5C/FFFFFF?text=' + msg.name.charAt(0);
                  }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0C2E5C] mb-1">{msg.name}</h3>
                  <p className="text-[#FDB813] font-semibold mb-3">{msg.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{msg.message}</p>
                  <button className="mt-4 text-[#0C2E5C] font-semibold hover:text-[#FDB813] transition">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
