import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#0C2E5C] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ASIC Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-[#FDB813] text-[#0C2E5C] px-4 py-2 rounded font-semibold hover:bg-white transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#0C2E5C] mb-6">
            Welcome, {user.first_name || user.username}! 👋
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Info Card */}
            <div className="bg-gradient-to-br from-[#0C2E5C] to-[#1a4d8f] text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">User Information</h3>
              <div className="space-y-2">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>User Type:</strong> {user.user_type}</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#FDB813] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0C2E5C] mb-4">Quick Stats</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-[#0C2E5C]">0</p>
                <p className="text-sm">Notifications</p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white border-2 border-[#0C2E5C] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-[#0C2E5C] mb-4">Quick Actions</h3>
              <button className="w-full bg-[#0C2E5C] text-white py-2 rounded mb-2 hover:bg-[#1a4d8f]">
                View Profile
              </button>
              <button className="w-full bg-gray-200 text-[#0C2E5C] py-2 rounded hover:bg-gray-300">
                Settings
              </button>
            </div>
          </div>

          {/* Coming Soon Message */}
          <div className="mt-8 text-center p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0C2E5C] mb-4">
              Dashboard Under Development 🚧
            </h3>
            <p className="text-gray-600">
              Full dashboard features coming soon! For now, you can access the admin panel
              or navigate to other pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
