const QuickLinks = () => {
  const links = [
    { icon: '📋', title: 'DOWNLOAD PAPER', color: 'bg-orange-400', link: '#' },
    { icon: '📚', title: 'SCIENCE LIBRARY', color: 'bg-yellow-400', link: '#' },
    { icon: '💼', title: 'COMMERCE', color: 'bg-pink-400', link: '#' },
    { icon: '🏛️', title: 'TRADITIONAL', color: 'bg-cyan-400', link: '#' },
    { icon: '⚖️', title: 'MIDDLE LEVEL', color: 'bg-orange-500', link: '#' }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`${item.color} p-6 rounded-lg text-center hover:scale-105 transition cursor-pointer shadow-lg`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold text-sm">{item.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
