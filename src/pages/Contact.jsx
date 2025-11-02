import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await contactAPI.submit(formData);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-xl text-gray-200">Get in Touch with ASIC Mawana</p>
          </div>
          <p className="text-white text-lg">Home / Contact</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#0C2E5C] mb-6">Send us a Message</h2>
            
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FDB813]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FDB813] text-[#0C2E5C] py-3 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0C2E5C] mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#FDB813] p-4 rounded-full">
                  <FaMapMarkerAlt className="text-[#0C2E5C] text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0C2E5C]">Address</h3>
                  <p className="text-gray-600">
                    Anglo Sanskrit Inter College<br />
                    Mawana, Meerut<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FDB813] p-4 rounded-full">
                  <FaPhone className="text-[#0C2E5C] text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0C2E5C]">Phone</h3>
                  <p className="text-gray-600">+91-708 8264 764</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FDB813] p-4 rounded-full">
                  <FaEnvelope className="text-[#0C2E5C] text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0C2E5C]">Email</h3>
                  <p className="text-gray-600">asicmawana@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.123456789!2d77.5!3d29.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA2JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ASIC Mawana Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
