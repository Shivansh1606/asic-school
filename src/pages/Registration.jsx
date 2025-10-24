import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    // Basic Information
    registrationNo: '',
    studentPEN: '',
    class: '',
    session: '2025-2026',
    studentName: '',
    aadharNo: '',
    gender: '',
    dob: '',
    height: '',
    weight: '',
    religion: '',
    category: '',
    email: '',
    bloodGroup: '',
    medium: 'Hindi',
    candidateType: '0',
    rationCard: 'APL',
    rationCardNo: '',
    handicap: 'No',
    certificateNo: '',
    srNo: '',
    year: '',
    prevSchool: '',
    bankAccountNo: '',
    bankName: '',
    ifscCode: '',
    
    // Parent Information
    fatherName: '',
    motherName: '',
    fatherAadhar: '',
    motherAadhar: '',
    occupation: '',
    mobileNo: '',
    whatsappNo: '',
    address: '',
    pinCode: '',
    parentBankAccountNo: '',
    parentBankName: '',
    parentIfscCode: '',
    
    // Last School Details
    lastSchoolName: '',
    siblingsInSchool: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    
    if (!formData.class) {
      newErrors.class = 'Please select a class';
    }
    
    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }
    
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    }
    
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = 'Father name is required';
    }
    
    if (!formData.motherName.trim()) {
      newErrors.motherName = 'Mother name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    // Mobile number validation
    if (formData.mobileNo && !/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      newErrors.mobileNo = 'Please enter valid 10-digit mobile number';
    }
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter valid email address';
    }
    
    // Aadhar validation (12 digits)
    if (formData.aadharNo && !/^\d{12}$/.test(formData.aadharNo)) {
      newErrors.aadharNo = 'Aadhar number must be 12 digits';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Registration successful! Your registration number will be sent to your mobile/email.');
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }, 2000);
  };

  // Class options
  const classOptions = [
    { value: '', label: 'Select' },
    { value: '6th-None', label: '6th-None' },
    { value: '7th-None', label: '7th-None' },
    { value: '8th-None', label: '8th-None' },
    { value: '9th-Science', label: '9th-Science' },
    { value: '9th-Commerce', label: '9th-Commerce' },
    { value: '9th-Home Science', label: '9th-Home Science' },
    { value: '10th-Science', label: '10th-Science' },
    { value: '10th-Commerce', label: '10th-Commerce' },
    { value: '10th-Home Science', label: '10th-Home Science' },
    { value: '11th-Art', label: '11th-Art' },
    { value: '11th-Commerce', label: '11th-Commerce' },
    { value: '11th-Home Science', label: '11th-Home Science' },
    { value: '11th-PCM', label: '11th-PCM' },
    { value: '11th-PCB', label: '11th-PCB' },
    { value: '12th-Art', label: '12th-Art' },
    { value: '12th-Commerce', label: '12th-Commerce' },
    { value: '12th-Home Science', label: '12th-Home Science' },
    { value: '12th-PCM', label: '12th-PCM' },
    { value: '12th-PCB', label: '12th-PCB' },
    { value: '11th-Commerce_Trade', label: '11th-Commerce_Trade' },
    { value: '11th-Photography', label: '11th-Photography' },
    { value: '12th-Commerce_Trade', label: '12th-Commerce_Trade' },
    { value: '12th-Photography', label: '12th-Photography' },
    { value: '10th-Passed', label: '10th-Passed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="bg-[#0C2E5C] text-white py-6 mb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center mb-4">
            <Link to="/" className="text-white hover:text-[#FDB813] transition">
              <FaArrowLeft className="text-xl" />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">A S INTER COLLEGE</h1>
            <p className="text-lg">(MAWANA (MEERUT))</p>
            <p className="text-sm mt-2">Contact No :- 7088264764 | Email-ID :- asicmawana@gmail.com</p>
            <p className="text-[#FDB813] font-semibold mt-3">A SENIOR SECONDARY SCHOOL</p>
            <p className="text-sm">AFFILIATED TO U.P. BOARD PRAYAGRAJ</p>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="max-w-5xl mx-auto px-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
            <FaCheckCircle className="text-green-500 text-2xl mr-3" />
            <div>
              <p className="text-green-800 font-semibold">{successMessage}</p>
              <p className="text-green-600 text-sm mt-1">Redirecting to login page...</p>
            </div>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0C2E5C] text-center mb-8 pb-4 border-b-2 border-[#FDB813]">
            Student Registration Form
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Basic Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#0C2E5C] mb-4 flex items-center">
                <span className="bg-[#FDB813] text-[#0C2E5C] w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Registration No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Registration No
                  </label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Auto-generated"
                    readOnly
                  />
                </div>

                {/* Student PEN */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Student PEN
                  </label>
                  <input
                    type="text"
                    name="studentPEN"
                    value={formData.studentPEN}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter Student PEN"
                  />
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Class *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.class ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                  >
                    {classOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.class && (
                    <p className="mt-1 text-sm text-red-600">{errors.class}</p>
                  )}
                </div>

                {/* Session */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Session
                  </label>
                  <input
                    type="text"
                    name="session"
                    value={formData.session}
                    readOnly
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>

                {/* Student Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.studentName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Please Enter Student Name"
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>
                  )}
                </div>

                {/* Aadhar No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aadhar No
                  </label>
                  <input
                    type="text"
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                    maxLength="12"
                    className={`w-full px-4 py-2.5 border ${
                      errors.aadharNo ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Enter 12-digit Aadhar Number"
                  />
                  {errors.aadharNo && (
                    <p className="mt-1 text-sm text-red-600">{errors.aadharNo}</p>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.gender ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                  )}
                </div>

                {/* DOB */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    DOB *
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.dob ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                  />
                  {errors.dob && (
                    <p className="mt-1 text-sm text-red-600">{errors.dob}</p>
                  )}
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter height in cm"
                  />
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter weight in kg"
                  />
                </div>

                {/* Religion */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Religion
                  </label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                  >
                    <option value="">- Select -</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Christian">Christian</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                  >
                    <option value="">- select -</option>
                    <option value="GEN">GEN</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="Minorities">Minorities</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email-ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                  >
                    <option value="">- Select -</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                {/* Medium */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Medium
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="medium"
                        value="Hindi"
                        checked={formData.medium === 'Hindi'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Hindi
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="medium"
                        value="English"
                        checked={formData.medium === 'English'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      English
                    </label>
                  </div>
                </div>

                {/* Ration Card */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ration Card
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rationCard"
                        value="APL"
                        checked={formData.rationCard === 'APL'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      APL
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="rationCard"
                        value="BPL"
                        checked={formData.rationCard === 'BPL'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      BPL
                    </label>
                  </div>
                </div>

                {/* Ration Card No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ration Card No.
                  </label>
                  <input
                    type="text"
                    name="rationCardNo"
                    value={formData.rationCardNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter Ration Card Number"
                  />
                </div>

                {/* Handicap */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Handicap
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="handicap"
                        value="Yes"
                        checked={formData.handicap === 'Yes'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="handicap"
                        value="No"
                        checked={formData.handicap === 'No'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* Certificate No */}
                {formData.handicap === 'Yes' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Certificate No.
                    </label>
                    <input
                      type="text"
                      name="certificateNo"
                      value={formData.certificateNo}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                      placeholder="Enter Certificate Number"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Parents & Guardian Information */}
            <div className="mb-8 pt-8 border-t-2 border-gray-200">
              <h3 className="text-xl font-bold text-[#0C2E5C] mb-4 flex items-center">
                <span className="bg-[#FDB813] text-[#0C2E5C] w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                Parents & Guardian Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Father's Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Father's Name *
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.fatherName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Please Enter Father's Name"
                  />
                  {errors.fatherName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fatherName}</p>
                  )}
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mother's Name *
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.motherName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Please Enter Mother's Name"
                  />
                  {errors.motherName && (
                    <p className="mt-1 text-sm text-red-600">{errors.motherName}</p>
                  )}
                </div>

                {/* Father's Aadhar */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Father's Aadhar No
                  </label>
                  <input
                    type="text"
                    name="fatherAadhar"
                    value={formData.fatherAadhar}
                    onChange={handleChange}
                    maxLength="12"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter 12-digit Aadhar"
                  />
                </div>

                {/* Mother's Aadhar */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mother's Aadhar No
                  </label>
                  <input
                    type="text"
                    name="motherAadhar"
                    value={formData.motherAadhar}
                    onChange={handleChange}
                    maxLength="12"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter 12-digit Aadhar"
                  />
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter Occupation"
                  />
                </div>

                {/* Mobile No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                    maxLength="10"
                    className={`w-full px-4 py-2.5 border ${
                      errors.mobileNo ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Enter 10-digit Mobile Number"
                  />
                  {errors.mobileNo && (
                    <p className="mt-1 text-sm text-red-600">{errors.mobileNo}</p>
                  )}
                </div>

                {/* Whatsapp No */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Whatsapp No
                  </label>
                  <input
                    type="tel"
                    name="whatsappNo"
                    value={formData.whatsappNo}
                    onChange={handleChange}
                    maxLength="10"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter Whatsapp Number"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-4 py-2.5 border ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent`}
                    placeholder="Please Enter Address"
                  ></textarea>
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>

                {/* Pin Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    maxLength="6"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent"
                    placeholder="Enter 6-digit Pin Code"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center gap-4 pt-6 border-t-2 border-gray-200">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-8 py-3 border-2 border-[#0C2E5C] text-[#0C2E5C] rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-[#FDB813] text-[#0C2E5C] rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
