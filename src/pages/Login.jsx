import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';

// Demo Credentials
const DEMO_CREDENTIALS = {
  student: {
    username: 'student123',
    password: 'student@123',
    name: 'Rahul Kumar'
  },
  staff: {
    username: 'staff456',
    password: 'staff@456',
    name: 'Priya Sharma'
  },
  admin: {
    username: 'admin',
    password: 'admin@789',
    name: 'Principal Sir'
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoInfo, setShowDemoInfo] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    userType: 'student'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Quick fill demo credentials
  const fillDemoCredentials = () => {
    const credentials = DEMO_CREDENTIALS[formData.userType];
    setFormData(prev => ({
      ...prev,
      username: credentials.username,
      password: credentials.password
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate API call with credential verification
    setTimeout(() => {
      const demoUser = DEMO_CREDENTIALS[formData.userType];
      
      // Check if credentials match demo credentials
      if (formData.username === demoUser.username && formData.password === demoUser.password) {
        // Store user data in localStorage
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userType', formData.userType);
        localStorage.setItem('username', demoUser.name);
        localStorage.setItem('loginTime', new Date().toISOString());
        
        setLoading(false);
        
        // Redirect based on user type
        if (formData.userType === 'admin') {
          navigate('/admin/dashboard');
        } else if (formData.userType === 'staff') {
          navigate('/staff/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      } else {
        setLoading(false);
        setErrors({
          username: 'Invalid username or password',
          password: 'Invalid username or password'
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C2E5C] via-[#1a4d8f] to-[#0C2E5C] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/logo.png" 
              alt="ASIC Logo" 
              className="h-24 w-24 rounded-full shadow-lg"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><circle cx="48" cy="48" r="45" fill="white"/><text x="48" y="58" font-size="24" text-anchor="middle" fill="%230C2E5C" font-family="Arial">ASIC</text></svg>';
              }}
            />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            A S INTER COLLEGE
          </h2>
          <p className="text-gray-200 text-sm">MAWANA (MEERUT)</p>
          <p className="text-[#FDB813] font-semibold mt-4 text-lg">Login to Your Account</p>
        </div>

        {/* Demo Credentials Info Box */}
        {showDemoInfo && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-lg relative">
            <button
              onClick={() => setShowDemoInfo(false)}
              className="absolute top-2 right-2 text-blue-700 hover:text-blue-900"
            >
              ×
            </button>
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-bold text-blue-900 mb-2">Demo Login Credentials:</p>
                <div className="space-y-2 text-blue-800">
                  <div className="bg-white p-2 rounded">
                    <p className="font-semibold">Student:</p>
                    <p>Username: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">student123</span></p>
                    <p>Password: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">student@123</span></p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="font-semibold">Staff:</p>
                    <p>Username: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">staff456</span></p>
                    <p>Password: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">staff@456</span></p>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <p className="font-semibold">Admin:</p>
                    <p>Username: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">admin</span></p>
                    <p>Password: <span className="font-mono bg-blue-100 px-2 py-0.5 rounded">admin@789</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Login As
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, userType: 'student', username: '', password: '' }))}
                  className={`py-2.5 rounded-lg font-semibold text-sm transition ${
                    formData.userType === 'student'
                      ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, userType: 'staff', username: '', password: '' }))}
                  className={`py-2.5 rounded-lg font-semibold text-sm transition ${
                    formData.userType === 'staff'
                      ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Staff
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, userType: 'admin', username: '', password: '' }))}
                  className={`py-2.5 rounded-lg font-semibold text-sm transition ${
                    formData.userType === 'admin'
                      ? 'bg-[#FDB813] text-[#0C2E5C] shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Admin
                </button>
              </div>
              
              {/* Auto-fill Demo Credentials Button */}
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full mt-2 text-xs text-blue-600 hover:text-blue-800 font-semibold"
              >
                📝 Click here to auto-fill demo credentials
              </button>
            </div>

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                Username / Registration No *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-3 border ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition`}
                  placeholder="Enter your username"
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-10 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-[#FDB813] focus:ring-[#FDB813] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#0C2E5C] hover:text-[#FDB813] transition">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-[#0C2E5C] bg-[#FDB813] hover:bg-[#0C2E5C] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FDB813] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                'Login'
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/registration" className="font-semibold text-[#0C2E5C] hover:text-[#FDB813] transition">
                Register Now
              </Link>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-white text-sm">
          <p>Contact: +91-708 8264 764</p>
          <p>Email: asicmawana@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
