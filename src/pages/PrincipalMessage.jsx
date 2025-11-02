import { useState, useEffect } from 'react';
import { managementAPI } from '../services/api';
import ManagementTabs from '../components/ManagementTabs';

const PrincipalMessage = () => {
  const [principal, setPrincipal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrincipalData();
  }, []);

  const fetchPrincipalData = async () => {
    try {
      const response = await managementAPI.getByPosition('principal');
      setPrincipal(response.data[0] || null);
    } catch (error) {
      console.error('Error fetching principal data:', error);
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
            <h1 className="text-5xl font-bold text-white mb-2">Principal's Message</h1>
            <p className="text-xl text-gray-200">Inspiring Excellence and Character</p>
          </div>
          <p className="text-white text-lg">Home / Management / Principal</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <ManagementTabs />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {principal ? (
            <>
              <div className="text-center mb-8 pb-8 border-b border-gray-200">
                {getImageUrl(principal.photo) ? (
                  <img
                    src={getImageUrl(principal.photo)}
                    alt={principal.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#FDB813]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-32 h-32 bg-[#0C2E5C] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl text-white font-bold">
                      {principal.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h2 className="text-3xl font-bold text-[#0C2E5C] mb-2">{principal.name}</h2>
                <p className="text-xl text-[#FDB813] font-semibold">{principal.designation}</p>
                {principal.qualification && (
                  <p className="text-sm text-gray-500 mt-2">{principal.qualification}</p>
                )}
                <p className="text-gray-600 mt-1">Anglo Sanskrit Inter College, Mawana</p>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <div dangerouslySetInnerHTML={{ 
                  __html: principal.message.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>') 
                }} />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold text-[#0C2E5C]">{principal.name}</p>
                <p className="text-gray-600">{principal.designation}</p>
                <p className="text-gray-600">Anglo Sanskrit Inter College, Mawana</p>
                {principal.qualification && (
                  <p className="text-sm text-gray-500 mt-1">{principal.qualification}</p>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Principal's message not available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;
