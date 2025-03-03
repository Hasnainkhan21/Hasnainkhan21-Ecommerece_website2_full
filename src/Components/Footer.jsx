import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Section 1: Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">e-Shop</h3>
          <p className="text-gray-400">
            Your one-stop shop for all your needs. Quality products at the best prices.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
          </div>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-wheat-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 cursor-pointer text-white rounded-r-md hover:bg-red-600 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-700 py-4 text-center text-gray-400 mt-8">
        <p>&copy; 2025 e-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
