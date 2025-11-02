import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { staffAPI } from '../services/api';

const StaffDetails = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('type') || 'teaching');
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStaffMembers();
  }, [activeTab]);

  const fetchStaffMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = activeTab === 'teaching' 
        ? await staffAPI.getTeaching()
        : await staffAPI.getNonTeaching();
      
      setStaffMembers(response.data.results || response.data);
    } catch (error) {
      console.error('Error fetching staff members:', error);
      setError('Failed to load staff members. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Dynamic content based on active tab
  const getPageContent = () => {
    if (activeTab === 'teaching') {
      return {
        title: 'Teaching Faculty',
        description: 'For more than a century Anglo Sanskrit Inter College has been committed to academic excellence with social justice.',
        sectionTitle: 'Teaching Staff'
      };
    } else {
      return {
        title: 'Non Teaching Staff',
        description: "College environment needs a superb teaching faculty! But, there can't be reasonable performance and no result without the presence of effective non-teaching faculty.",
        sectionTitle: 'Non Teaching Staff'
      };
    }
  };

  const pageContent = getPageContent();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Our Faculty</h1>
            <p className="text-xl text-gray-200">Experienced and Dedicated Staff Members</p>
          </div>
          <p className="text-white text-lg">Home / Staff</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'teaching'
                  ? 'bg-[#FDB813] text-[#0C2E5C]'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Teaching Staff
            </button>
            <button
              onClick={() => setActiveTab('non_teaching')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'non_teaching'
                  ? 'bg-[#FDB813] text-[#0C2E5C]'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Non-Teaching Staff
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FDB813]"></div>
            <p className="mt-4 text-gray-600">Loading staff members...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
            <button 
              onClick={fetchStaffMembers}
              className="mt-4 bg-[#FDB813] text-[#0C2E5C] px-6 py-2 rounded font-semibold hover:bg-[#0C2E5C] hover:text-white transition"
            >
              Retry
            </button>
          </div>
        ) : staffMembers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No staff members found.</p>
            <p className="text-gray-500 mt-2">Please add staff members from the admin panel.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm">
            {/* Title Section - Dynamic Content */}
            <div className="bg-gray-100 px-8 py-6 border-b-2 border-gray-300">
              <h2 className="text-2xl font-bold text-[#0C2E5C]">{pageContent.title}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {pageContent.description}
              </p>
            </div>

            {/* Table Header - Dynamic Section Title */}
            <div className="px-8 py-4 border-b border-gray-300">
              <h3 className="text-xl font-bold text-[#0C2E5C]">{pageContent.sectionTitle}</h3>
            </div>

            {/* Staff Table - Exact Same Structure as Screenshot */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 border-b border-gray-300">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      S.N.
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      NAME OF FACULTY
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      DESIGNATION
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      SUBJECT
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      QUALIFICATION
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-300">
                      D.O.B
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      DOJ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffMembers.map((staff, index) => (
                    <tr 
                      key={staff.id} 
                      className={`border-b border-gray-300 ${
                        index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'
                      } hover:bg-yellow-100 transition`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r border-gray-300 uppercase">
                        {staff.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300">
                        {staff.designation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300 uppercase">
                        {staff.subject || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300">
                        {staff.qualification}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 border-r border-gray-300">
                        {staff.dob ? new Date(staff.dob).toLocaleDateString('en-GB') : '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        {new Date(staff.date_of_joining).toLocaleDateString('en-GB')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDetails;
