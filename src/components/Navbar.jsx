import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0C2E5C] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-xs" />
              <span>+91-708 8264 764</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-xs" />
              <span>asicmawana@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <FaFacebook className="cursor-pointer hover:text-[#FDB813] transition" />
              <FaTwitter className="cursor-pointer hover:text-[#FDB813] transition" />
              <FaYoutube className="cursor-pointer hover:text-[#FDB813] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#FDB813] transition" />
            </div>
           
            <Link 
              to="/login"
              className="bg-white text-[#0C2E5C] px-4 py-1 rounded text-sm font-semibold hover:bg-[#FDB813] transition"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="bg-[#FDB813] text-[#0C2E5C] px-4 py-1 rounded text-sm font-bold hover:bg-white transition"
            >
              New Registration
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="ASIC Logo" 
                  className="h-16 w-16 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="30" fill="%230C2E5C"/><text x="32" y="38" font-size="20" text-anchor="middle" fill="white" font-family="Arial">ASIC</text></svg>';
                  }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-bold text-[#0C2E5C] leading-tight whitespace-nowrap">
                  Anglo Sanskrit Inter College
                </h1>
                <p className="text-sm text-gray-600 leading-tight whitespace-nowrap">
                  Mawana (Meerut)
                </p>
                <p className="text-xs text-gray-500 leading-tight whitespace-nowrap">
                  एंग्लो संस्कृत इण्टर कॉलिज मवाना (मेरठ)
                </p>
              </div>
            </Link>

            {/* Desktop Menu - FIXED WRAPPING ISSUE */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition whitespace-nowrap">
                HOME
              </Link>
              
              <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition whitespace-nowrap">
                ABOUT US
              </Link>
              
              {/* Staff Details Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition flex items-center whitespace-nowrap">
                  STAFF DETAILS <FaChevronDown className="ml-1 text-xs" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/staff-details?type=teaching" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    Teaching
                  </Link>
                  <Link to="/staff-details?type=non-teaching" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    Non-Teaching
                  </Link>
                </div>
              </div>

              {/* Management Dropdown - UPDATED WITH ALL 4 PAGES */}
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition flex items-center whitespace-nowrap">
                  MANAGEMENT <FaChevronDown className="ml-1 text-xs" />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/management" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    College Committee
                  </Link>
                  <Link to="/management/president-message" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    President's Message
                  </Link>
                  <Link to="/management/secretary-message" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    Secretary's Message
                  </Link>
                  <Link to="/management/principal-message" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    Principal's Message
                  </Link>
                </div>
              </div>

              <Link to="/course" className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition whitespace-nowrap">
                COURSE
              </Link>

              {/* Activities Dropdown */}
              <div className="relative group">
                <button className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition flex items-center whitespace-nowrap">
                  ACTIVITIES <FaChevronDown className="ml-1 text-xs" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link to="/activities?type=all" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white whitespace-nowrap">
                    All Activities
                  </Link>
                </div>
              </div>

              <Link to="/gallery" className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition whitespace-nowrap">
                GALLERY
              </Link>
              
              <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-[#FDB813] font-semibold transition whitespace-nowrap">
                CONTACT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu - UPDATED WITH MANAGEMENT LINKS */}
          {isOpen && (
            <div className="lg:hidden pb-4">
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                HOME
              </Link>
              <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                ABOUT US
              </Link>
              <Link to="/staff-details" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                STAFF DETAILS
              </Link>
              
              {/* Management Mobile Links */}
              <div className="px-4 py-2 text-gray-700 font-semibold">
                MANAGEMENT
              </div>
              <Link to="/management" className="block pl-8 py-2 text-gray-600 hover:bg-[#FDB813] hover:text-white">
                College Committee
              </Link>
              <Link to="/management/president-message" className="block pl-8 py-2 text-gray-600 hover:bg-[#FDB813] hover:text-white">
                President's Message
              </Link>
              <Link to="/management/secretary-message" className="block pl-8 py-2 text-gray-600 hover:bg-[#FDB813] hover:text-white">
                Secretary's Message
              </Link>
              <Link to="/management/principal-message" className="block pl-8 py-2 text-gray-600 hover:bg-[#FDB813] hover:text-white">
                Principal's Message
              </Link>

              <Link to="/course" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                COURSE
              </Link>
              <Link to="/activities" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                ACTIVITIES
              </Link>
              <Link to="/gallery" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                GALLERY
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-[#FDB813] hover:text-white">
                CONTACT
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-[#FDB813] py-2 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center animate-marquee">
            <span className="text-[#0C2E5C] font-semibold mr-8">📝 Application Form the Teaching Faculty</span>
            <span className="text-[#0C2E5C] font-semibold mr-8">✏️ Requiers Faculty for English Medium</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
