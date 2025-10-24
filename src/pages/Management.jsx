import { useSearchParams } from 'react-router-dom';

const Management = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section') || 'committee';

  const managementData = [
    { sn: '1-', name: 'श्री अखिल कुमार कौशिक', designation: 'अध्यक्ष' },
    { sn: '2-', name: 'श्री नरेश कुमार रस्तोगी', designation: 'उपाध्यक्ष' },
    { sn: '3-', name: 'श्री पवन कुमार रस्तोगी', designation: 'प्रबंधक' },
    { sn: '4-', name: 'श्री शैलज दुबलिश', designation: 'उपप्रबंधक' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">College Management</h1>
          <p className="text-white">Home / Management</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-red-600 text-center mb-8">College Management</h2>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
            <p>
              Today in our nation a wide gender gap exists in every field. This college is dedicated to provide 
              functional and meaningful education to women of all sections of society so that they can actively 
              participate in all fields of life. The college aspires to provide not only formal education but to 
              contribute to the development of all facets of the students' personality by engaging them in sports 
              and social service activities, debates and art and literary activities.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-red-600 text-center mb-6">A Message From Commitee</h3>
          
          <div className="prose max-w-none text-gray-600 leading-relaxed mb-8">
            <p>
              Our college is fully dedicated to serve the society with the best quality education along with the 
              discipline so that our students can grow in every aspects of life. Management Team has ensured the 
              arrangement of every needed facility for proper operation of the educational system.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-red-600 text-center mb-6">College Management</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-3 text-left">S.N.</th>
                  <th className="border border-gray-300 px-6 py-3 text-left">NAME</th>
                  <th className="border border-gray-300 px-6 py-3 text-left">DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {managementData.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-6 py-3">{member.sn}</td>
                    <td className="border border-gray-300 px-6 py-3">{member.name}</td>
                    <td className="border border-gray-300 px-6 py-3">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
