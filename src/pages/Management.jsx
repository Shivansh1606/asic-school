import { useState, useEffect } from 'react';
import { managementAPI } from '../services/api';
import ManagementTabs from '../components/ManagementTabs';

const Management = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommitteeMembers();
  }, []);

  const fetchCommitteeMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await managementAPI.getByPosition('committee');
      setCommitteeMembers(response.data);
    } catch (error) {
      console.error('Error fetching committee members:', error);
      setError('Failed to load committee members.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">College Management</h1>
            <p className="text-xl text-gray-200">Dedicated to Excellence in Education</p>
          </div>
          <p className="text-white text-lg">Home / Management</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <ManagementTabs />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
            College Management Committee
          </h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p>
              Today in our nation a wide gender gap exists in every field. This college is dedicated to provide 
              functional and meaningful education to students of all sections of society so that they can actively 
              participate in all fields of life. The college aspires to provide not only formal education but to 
              contribute to the development of all facets of the students' personality by engaging them in sports 
              and social service activities, debates and art and literary activities.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-red-600 text-center mb-6">
            A Message From Committee
          </h3>
          
          <div className="prose max-w-none text-gray-600 leading-relaxed mb-8">
            <p>
              Our college is fully dedicated to serve the society with the best quality education along with the 
              discipline so that our students can grow in every aspect of life. Management Team has ensured the 
              arrangement of every needed facility for proper operation of the educational system.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-red-600 text-center mb-6">
            Management Committee Members
          </h3>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#FDB813]"></div>
              <p className="mt-4 text-gray-600">Loading committee members...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={fetchCommitteeMembers}
                className="mt-4 bg-[#FDB813] text-[#0C2E5C] px-6 py-2 rounded font-semibold"
              >
                Retry
              </button>
            </div>
          ) : committeeMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No committee members found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-black">
                    <th className="border border-gray-300 px-6 py-3 text-left">S.N.</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">NAME</th>
                    <th className="border border-gray-300 px-6 py-3 text-left">DESIGNATION</th>
                  </tr>
                </thead>
                <tbody>
                  {committeeMembers.map((member, index) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-3">{index + 1}</td>
                      <td className="border border-gray-300 px-6 py-3">{member.name}</td>
                      <td className="border border-gray-300 px-6 py-3">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Management;
