import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({
      name,
      photoURL,
      email,
      password,
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-600 mt-2">
            Join Dragon News and stay informed.
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Photo URL
            </label>

            <input
              type="url"
              name="photoURL"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <span className="text-gray-600">
                I agree to the Terms &
                Conditions and Privacy Policy.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-500">
            OR
          </span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Register */}
        <div className="space-y-3">
          <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FaGithub />
            Continue with GitHub
          </button>
        </div>

        {/* Login Redirect */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;