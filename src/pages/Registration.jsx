import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    user_type: 'student'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Name validation
    if (!formData.first_name) {
      newErrors.first_name = 'First name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Prepare data for API
      const registrationData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        first_name: formData.first_name,
        last_name: formData.last_name,
        user_type: formData.user_type
      };

      const response = await authAPI.register(registrationData);
      
      // Store tokens and user info
      localStorage.setItem('access_token', response.data.tokens.access);
      localStorage.setItem('refresh_token', response.data.tokens.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      setSuccess(true);

      // Redirect after 2 seconds
      setTimeout(() => {
        const userType = response.data.user.user_type;
        if (userType === 'admin') {
          navigate('/admin/dashboard');
        } else if (userType === 'staff') {
          navigate('/staff/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      
      if (err.response?.data) {
        const apiErrors = err.response.data;
        const newErrors = {};
        
        // Handle Django validation errors
        Object.keys(apiErrors).forEach(key => {
          if (Array.isArray(apiErrors[key])) {
            newErrors[key] = apiErrors[key][0];
          } else {
            newErrors[key] = apiErrors[key];
          }
        });
        
        setErrors(newErrors);
      } else {
        setErrors({ general: 'Registration failed. Please try again.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0C2E5C] to-[#1a4d8f] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <span className="text-3xl font-bold text-[#0C2E5C]">ASIC</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-200">Join Anglo Sanskrit Inter College Community</p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              ✅ Registration successful! Redirecting to dashboard...
            </div>
          )}

          {errors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Register as *
              </label>
              <select
                name="user_type"
                value={formData.user_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
              >
                <option value="student">Student</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#FDB813] ${
                    errors.first_name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#FDB813] ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="johndoe"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#FDB813] ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#FDB813] ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Minimum 6 characters"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#FDB813] ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input type="checkbox" required className="mt-1 mr-2" />
              <label className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-[#0C2E5C] hover:text-[#FDB813]">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#0C2E5C] hover:text-[#FDB813]">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading || success}
              className="w-full bg-[#FDB813] text-[#0C2E5C] py-3 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#0C2E5C] font-semibold hover:text-[#FDB813]">
                Login Here
              </Link>
            </p>
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

export default Registration;
