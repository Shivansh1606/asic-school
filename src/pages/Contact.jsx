const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-[#0C2E5C] to-[#1a4d8f]">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="text-white">Home / Contact</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#0C2E5C] mb-12">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
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

          {/* Map */}
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
  );
};

export default Contact;
