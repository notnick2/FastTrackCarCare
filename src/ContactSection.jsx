import React from 'react';

const ContactSection = () => {
  return (
    <div id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg leading-relaxed">
              Whether you have a question about our products or need assistance
              with an order, our team is here to help. Reach out to us via email
              or phone, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="md:w-1/2">
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-4 rounded bg-gray-800 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-4 rounded bg-gray-800 text-white"
              />
              <textarea
                placeholder="Your Message"
                className="w-full mb-4 p-4 rounded bg-gray-800 text-white"
                rows="5"
              />
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
