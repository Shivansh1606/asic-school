const Contact = () => {
  return (
    <div>
      {/* Hero Section with Background */}
      <div 
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-[#0C2E5C] bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-xl text-gray-200">We'd love to hear from you</p>
          </div>
          <p className="text-white text-lg">Home / Contact</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0C2E5C] mb-4">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions about admissions, courses, or anything else? We're here to help! 
          Fill out the form below or visit us in person.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#0C2E5C] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              />
              <input
                type="tel"
                placeholder="Enter Phone No."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              />
              <textarea
                placeholder="Enter Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDB813]"
              ></textarea>
              <button className="w-full bg-[#FDB813] text-[#0C2E5C] py-3 rounded-lg font-bold hover:bg-[#0C2E5C] hover:text-white transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-[#0C2E5C] mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-[#0C2E5C]">Address:</h4>
                  <p>Mawana, Meerut (U.P.)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0C2E5C]">Phone:</h4>
                  <p>+91-708 8264 764</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0C2E5C]">Email:</h4>
                  <p>asicmawana@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0C2E5C]">Office Hours:</h4>
                  <p>Monday - Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.9476!2d77.9275!3d29.0897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA1JzIzLjAiTiA3N8KwNTUnMzkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-96 rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
