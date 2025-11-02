import { useState, useEffect } from 'react';
import { managementAPI } from '../services/api';
import ManagementTabs from '../components/ManagementTabs';

const SecretaryMessage = () => {
  const [secretary, setSecretary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSecretaryData();
  }, []);

  const fetchSecretaryData = async () => {
    try {
      const response = await managementAPI.getByPosition('secretary');
      setSecretary(response.data[0] || null);
    } catch (error) {
      console.error('Error fetching secretary data:', error);
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
            <h1 className="text-5xl font-bold text-white mb-2">Secretary's Message</h1>
            <p className="text-xl text-gray-200">Commitment to Quality Education</p>
          </div>
          <p className="text-white text-lg">Home / Management / Secretary</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <ManagementTabs />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {secretary ? (
            <>
              <div className="text-center mb-8 pb-8 border-b border-gray-200">
                {getImageUrl(secretary.photo) ? (
                  <img
                    src={getImageUrl(secretary.photo)}
                    alt={secretary.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#FDB813]"
                  />
                ) : (
                  <div className="w-32 h-32 bg-[#0C2E5C] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl text-white font-bold">
                      {secretary.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h2 className="text-3xl font-bold text-[#0C2E5C] mb-2">{secretary.name}</h2>
                <p className="text-xl text-[#FDB813] font-semibold">{secretary.designation}</p>
                {secretary.qualification && (
                  <p className="text-gray-600 mt-2">{secretary.qualification}</p>
                )}
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: secretary.message.replace(/\n/g, '<br/>') }} />
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Secretary message not available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecretaryMessage;
