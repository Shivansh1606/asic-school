import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0C2E5C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img 
              src="/logo.png" 
              alt="ASIC Logo" 
              className="h-32 w-32 mb-4 rounded-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><circle cx="64" cy="64" r="60" fill="white"/><text x="64" y="74" font-size="30" text-anchor="middle" fill="%230C2E5C" font-family="Arial">ASIC</text></svg>';
              }}
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Phasellus blandit massa enim, elit id varius nunc. Lorem ipsum dolor sit amet, consectetur industry.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#FDB813] transition">› Join Us</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#FDB813] transition">› About Us</Link></li>
              <li><Link to="/course" className="text-gray-300 hover:text-[#FDB813] transition">› Features</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FDB813] transition">› Feedback</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FDB813] transition">› Support center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FDB813] transition">› Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#FDB813] mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300">MAWANA, MEERUT (U.P.)</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#FDB813] flex-shrink-0" />
                <p className="text-sm text-gray-300">asicmawana@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#FDB813] flex-shrink-0" />
                <p className="text-sm text-gray-300">+91-708 8264 764</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Contrary to popular belief of lorem Ipsm Latin amet ltin from consectetur industry.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              />
              <button className="w-full bg-[#FDB813] text-[#0C2E5C] py-2 rounded font-bold hover:bg-white transition">
                Subscribe
              </button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded hover:bg-[#FDB813] transition">
                  <FaFacebook />
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded hover:bg-[#FDB813] transition">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded hover:bg-[#FDB813] transition">
                  <FaYoutube />
                </a>
                <a href="#" className="bg-white bg-opacity-10 p-2 rounded hover:bg-[#FDB813] transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© Pwored by Concept IT Solution.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-[#FDB813] transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#FDB813] transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
