import { Link, useLocation } from 'react-router-dom';

const ManagementTabs = () => {
  const location = useLocation();
  
  const tabs = [
    {
      path: '/management',
      label: 'College Committee',
      exact: true
    },
    {
      path: '/management/president-message',
      label: "President's Message"
    },
    {
      path: '/management/secretary-message',
      label: "Secretary's Message"
    },
    {
      path: '/management/principal-message',
      label: "Principal's Message"
    }
  ];

  const isActive = (tabPath, exact) => {
    if (exact) {
      return location.pathname === tabPath;
    }
    return location.pathname === tabPath;
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-4">
          {tabs.map((tab) => (
            <Link key={tab.path} to={tab.path}>
              <button 
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  isActive(tab.path, tab.exact)
                    ? 'bg-[#FDB813] text-[#0C2E5C]'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementTabs;
