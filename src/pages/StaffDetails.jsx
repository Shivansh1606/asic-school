import { useSearchParams } from 'react-router-dom';

const StaffDetails = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'teaching';

  const teachingStaff = [
    { sn: 1, name: 'DR.MEGHRAJ SINGH', designation: 'PRINCIPAL', subject: 'CHEMISTRY', qualification: 'M.Sc.(Inorg.),M.Sc.(Phy.),B.Ed.,Ph.D.', dob: '28.12.1979', doi: '08-01-2022' },
    { sn: 2, name: 'KRISHNA CHANDRA', designation: 'Vice Principal', subject: 'MATHEMATICS', qualification: 'M.Sc.(Mathematics), B.Ed.', dob: '26.02.1978', doi: '17-05-2003' },
    { sn: 3, name: 'MINAKSHI', designation: 'HOD-Science Dept', subject: 'MATHEMATICS', qualification: 'M.A. (Mathematics), B.Ed.', dob: '19.08.1973', doi: '05-11-2003' },
    { sn: 4, name: 'NIRPENDRA KUMAR BHATNAGER', designation: 'LECTURER', subject: 'PHYSICS', qualification: 'M.Sc. (Physics),B.Ed.', dob: '18.07.1975', doi: '13-07-2001' },
    { sn: 5, name: 'SUNIL KUMAR', designation: 'LECTURER', subject: 'CIVICS', qualification: 'B.Sc.,M.A.(Pol.Science)', dob: '11.01.1978', doi: '26-04-2010' },
    { sn: 6, name: 'AMITA KANSAL', designation: 'LECTURER', subject: 'PHYSICS', qualification: 'M.Sc. (Physics),B.Ed.', dob: '30.06.1963', doi: '08-12-2005' },
    { sn: 7, name: 'DALVIR SINGH', designation: 'HOD-Commerce Dept', subject: 'ECONOMICS', qualification: 'M.Sc.(Maths),M.A.(Eco.,Hist.Edu.),B.Ed.', dob: '05.01.1968', doi: '21-09-2001' },
    { sn: 8, name: 'RAM BHOOL NATH', designation: 'LECTURER', subject: 'ENGLISH', qualification: 'M.A. (English),B.Ed', dob: '05.12.1976', doi: '17-11-2004' },
    { sn: 9, name: 'SANDEEP KUMAR', designation: 'LECTURER', subject: 'GEOGRAPHY', qualification: 'M.A. (Geography),B.Ed', dob: '04.04.1986', doi: '08-08-2020' },
    { sn: 10, name: 'PRITAM SINGH', designation: 'LECTURER', subject: 'BIOLOGY', qualification: 'M.Sc. (Zoology).,B.Ed.', dob: '01.07.1971', doi: '01-11-2004' },
  ];

  const nonTeachingStaff = [
    { sn: '1-', name: 'Amit Yadav', designation: 'Chief Supervisior' },
    { sn: '2-', name: 'Naresh Singh', designation: 'Head Poen' },
    { sn: '3-', name: 'Rajesh Kumar', designation: 'Clerk' },
    { sn: '4-', name: 'Suresh Kumar', designation: 'Clerk' },
    { sn: '5-', name: 'Anil Kumar', designation: 'Clerk' },
    { sn: '6-', name: 'Vijay Kumar', designation: 'Peon' },
    { sn: '7-', name: 'Ramesh Kumar', designation: 'Peon' },
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Page Title */}
            <div className="bg-gray-50 px-6 py-4 border-b-2 border-[#0C2E5C]">
              <h2 className="text-2xl font-bold text-[#0C2E5C]">Teaching Faculty</h2>
              <p className="text-sm text-gray-600 mt-1">
                For more than a century Anglo Sanskrit Inter College has been committed to academic excellence with social justice.
              </p>
            </div>

            {/* Teaching Staff Heading */}
            <div className="px-6 py-4 bg-white border-b">
              <h3 className="text-xl font-bold text-[#0C2E5C]">Teaching Staff</h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">S.N.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">NAME OF FACULTY</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">DESIGNATION</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">SUBJECT</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">QUALIFICATION</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">D.O.B</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">DOI</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {teachingStaff.map((staff, index) => (
                    <tr key={index} className={index === 0 ? 'bg-yellow-50' : 'hover:bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.sn}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800">{staff.name}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.designation}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.subject}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.qualification}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.dob}</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{staff.doi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Page Title */}
            <div className="bg-gray-50 px-6 py-4 border-b-2 border-[#0C2E5C]">
              <h2 className="text-2xl font-bold text-[#0C2E5C]">Non Teaching Staff</h2>
              <p className="text-sm text-gray-600 mt-1">
                College environment needs a superb teaching faculty! But, there can't be reasonable performance and no result without the presence of effective non-teaching faculty.
              </p>
            </div>

            {/* Non-Teaching Staff Heading */}
            <div className="px-6 py-4 bg-white border-b">
              <h3 className="text-xl font-bold text-[#0C2E5C]">Non-Teaching Staff (Class-III)</h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700 w-32">S.N.</th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">NAME</th>
                    <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-gray-700">DESIGNATION</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {nonTeachingStaff.map((staff, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 text-base">{staff.sn}</td>
                      <td className="border border-gray-300 px-6 py-4 text-base font-medium text-gray-800">{staff.name}</td>
                      <td className="border border-gray-300 px-6 py-4 text-base">{staff.designation}</td>
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
