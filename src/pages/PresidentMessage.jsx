import { useState, useEffect } from 'react';
import { managementAPI } from '../services/api';
import ManagementTabs from '../components/ManagementTabs';

const PresidentMessage = () => {
  const [president, setPresident] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPresidentData();
  }, []);

  const fetchPresidentData = async () => {
    try {
      const response = await managementAPI.getByPosition('president');
      setPresident(response.data[0] || null);
    } catch (error) {
      console.error('Error fetching president data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    return `http://localhost:8000/${cleanPath}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FDB813]"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">President's Message</h1>
            <p className="text-xl text-gray-200">Leading with Vision and Dedication</p>
          </div>
          <p className="text-white text-lg">Home / Management / President</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <ManagementTabs />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {president ? (
            <>
              <div className="text-center mb-8 pb-8 border-b border-gray-200">
                {getImageUrl(president.photo) ? (
                  <img
                    src={getImageUrl(president.photo)}
                    alt={president.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#FDB813]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-32 h-32 bg-[#0C2E5C] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl text-white font-bold">
                      {president.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h2 className="text-3xl font-bold text-[#0C2E5C] mb-2">{president.name}</h2>
                <p className="text-xl text-[#FDB813] font-semibold">{president.designation}</p>
                {president.qualification && (
                  <p className="text-gray-600 mt-2">{president.qualification}</p>
                )}
                <p className="text-gray-600 mt-1">Anglo Sanskrit Inter College, Mawana</p>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: president.message.replace(/\n/g, '<br/>') }} />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">President message not available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
