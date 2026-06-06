import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-wider">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Get In Touch
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          Have a news tip, story suggestion, feedback, or business inquiry?
          Our editorial team is ready to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 border rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <FaEnvelope className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">
                  newsroom@dragonnews.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <FaPhoneAlt className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-600">
                  +880 1234-567890
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold">Office Address</h3>
                <p className="text-gray-600">
                  123 News Avenue, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border rounded-2xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;