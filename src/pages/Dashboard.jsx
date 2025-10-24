import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser, FaBook, FaCalendar, FaFileAlt } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const userType = localStorage.getItem('userType');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0C2E5C] text-white py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {username || 'User'}!</h1>
            <p className="text-sm text-gray-300 capitalize">{userType} Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center bg-[#FDB813] text-[#0C2E5C] px-4 py-2 rounded-lg font-semibold hover:bg-white transition"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Dashboard Cards */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center justify-between mb-4">
              <FaUser className="text-4xl text-[#FDB813]" />
              <span className="text-3xl font-bold text-[#0C2E5C]">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Profile</h3>
            <p className="text-sm text-gray-500">View & Edit</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center justify-between mb-4">
              <FaBook className="text-4xl text-[#FDB813]" />
              <span className="text-3xl font-bold text-[#0C2E5C]">5</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Subjects</h3>
            <p className="text-sm text-gray-500">Enrolled</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center justify-between mb-4">
              <FaCalendar className="text-4xl text-[#FDB813]" />
              <span className="text-3xl font-bold text-[#0C2E5C]">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Attendance</h3>
            <p className="text-sm text-gray-500">85% Present</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center justify-between mb-4">
              <FaFileAlt className="text-4xl text-[#FDB813]" />
              <span className="text-3xl font-bold text-[#0C2E5C]">12</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Assignments</h3>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-[#0C2E5C] mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-semibold text-gray-700">Assignment Submitted</p>
                <p className="text-sm text-gray-500">Mathematics - Chapter 5</p>
              </div>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-semibold text-gray-700">Attendance Marked</p>
                <p className="text-sm text-gray-500">Present - All Classes</p>
              </div>
              <span className="text-sm text-gray-400">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-semibold text-gray-700">Exam Result Published</p>
                <p className="text-sm text-gray-500">Science - Mid Term</p>
              </div>
              <span className="text-sm text-gray-400">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
