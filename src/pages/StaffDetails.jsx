import { useSearchParams } from 'react-router-dom';

const StaffDetails = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'teaching';

  const teachingStaff = [
    { sn: 1, name: 'DR.MEGHRAJ SINGH', designation: 'PRINCIPAL', subject: 'CHEMISTRY', qualification: 'M.Sc.(Inorg.),M.Sc.(Phy.),B.Ed.,Ph.D.', dob: '28.12.1979', doi: '08-01-2022' },
    { sn: 2, name: 'KRISHNA CHANDRA', designation: 'LECTURER', subject: 'MATHEMATICS', qualification: 'M.Sc.(Mathematics), B.Ed.', dob: '26.02.1978', doi: '17-05-2003' },
    // Add more staff...
  ];

  const nonTeachingStaff = [
    { name: 'Mr. Shivanand Sharma', designation: 'Head Clerk' },
    { name: 'Mr. Sunil Gir', designation: 'Assistant Clerk' },
    { name: 'Mrs. Vasanti Pandey', designation: 'Assistant Clerk' },
    { name: 'Mr. Vishesh Kumar', designation: 'Assistant Clerk' },
    { name: 'Mr.Pramod Kumar', designation: 'Daftari' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            {type === 'teaching' ? 'Teaching Faculty' : 'Non Teaching Staff'}
          </h1>
          <p className="text-white">Home / Staff Details</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {type === 'teaching' ? (
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0C2E5C] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">S.N.</th>
                  <th className="px-4 py-3 text-left">NAME OF FACULTY</th>
                  <th className="px-4 py-3 text-left">DESIGNATION</th>
                  <th className="px-4 py-3 text-left">SUBJECT</th>
                  <th className="px-4 py-3 text-left">QUALIFICATION</th>
                  <th className="px-4 py-3 text-left">D.O.B</th>
                  <th className="px-4 py-3 text-left">DOI</th>
                </tr>
              </thead>
              <tbody>
                {teachingStaff.map((staff, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3">{staff.sn}</td>
                    <td className="px-4 py-3 font-semibold">{staff.name}</td>
                    <td className="px-4 py-3">{staff.designation}</td>
                    <td className="px-4 py-3">{staff.subject}</td>
                    <td className="px-4 py-3">{staff.qualification}</td>
                    <td className="px-4 py-3">{staff.dob}</td>
                    <td className="px-4 py-3">{staff.doi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <h2 className="text-2xl font-bold text-[#0C2E5C] p-6 border-b">Non-Teaching Staff (Class-III)</h2>
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">Name</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">Designation</th>
                </tr>
              </thead>
              <tbody>
                {nonTeachingStaff.map((staff, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{staff.name}</td>
                    <td className="px-6 py-4">{staff.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDetails;
