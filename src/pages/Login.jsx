import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.login(formData.username, formData.password);
      
      // Store tokens and user info
      localStorage.setItem('access_token', response.data.tokens.access);
      localStorage.setItem('refresh_token', response.data.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect based on user type
      const userType = response.data.user.user_type;
      
      if (userType === 'admin') {
        navigate('/admin/dashboard');
      } else if (userType === 'staff') {
        navigate('/staff/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.error || 'Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C2E5C] to-[#1a4d8f] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <span className="text-3xl font-bold text-[#0C2E5C]">ASIC</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-200">Login to Anglo Sanskrit Inter College Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813] focus:ring-2 focus:ring-[#FDB813]"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813] focus:ring-2 focus:ring-[#FDB813]"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#0C2E5C] hover:text-[#FDB813]">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FDB813] text-[#0C2E5C] py-3 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/registration" className="text-[#0C2E5C] font-semibold hover:text-[#FDB813]">
                Register Now
              </Link>
            </p>
          </div>

          {/* Admin Login Link */}
          <div className="mt-4 text-center">
            <a 
              href="http://localhost:8000/admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#0C2E5C]"
            >
              Admin Panel Login →
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white hover:text-[#FDB813] transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
