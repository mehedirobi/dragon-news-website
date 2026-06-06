import React from "react";
import { FaBullseye, FaEye, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-wider">
          About Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Journalism Without Fear or Favour
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 mt-5 leading-relaxed">
          Dragon News is a modern digital news platform dedicated to delivering
          accurate, timely, and unbiased journalism. We believe that informed
          citizens build stronger communities, which is why we are committed to
          reporting facts with integrity, transparency, and responsibility.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-5">
            <FaBullseye className="text-red-600 text-2xl" />
          </div>

          <h3 className="text-xl font-bold mb-3">Our Mission</h3>

          <p className="text-gray-600 leading-relaxed">
            To provide trustworthy journalism that informs, educates, and
            empowers readers through fact-based reporting and meaningful
            storytelling.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-5">
            <FaEye className="text-red-600 text-2xl" />
          </div>

          <h3 className="text-xl font-bold mb-3">Our Vision</h3>

          <p className="text-gray-600 leading-relaxed">
            To become a leading source of independent journalism, fostering an
            informed society where truth, accountability, and public interest
            come first.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-5">
            <FaShieldAlt className="text-red-600 text-2xl" />
          </div>

          <h3 className="text-xl font-bold mb-3">Our Values</h3>

          <p className="text-gray-600 leading-relaxed">
            Independence, fairness, transparency, and accuracy are at the heart
            of everything we do. We are committed to reporting without fear or
            favour.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-3xl font-bold text-red-600">24/7</h3>
          <p className="text-gray-600 mt-2">News Coverage</p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-3xl font-bold text-red-600">100+</h3>
          <p className="text-gray-600 mt-2">Daily Stories</p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-3xl font-bold text-red-600">50+</h3>
          <p className="text-gray-600 mt-2">Journalists</p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <h3 className="text-3xl font-bold text-red-600">1M+</h3>
          <p className="text-gray-600 mt-2">Monthly Readers</p>
        </div>
      </div>
    </section>
  );
};

export default About;