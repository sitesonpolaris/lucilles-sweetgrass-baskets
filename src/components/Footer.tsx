import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <footer className="bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img
                src="https://static.wixstatic.com/media/c73eb8_5ded37571771414398447425ede54cf6~mv2.png"
                alt="Lucille's Sweetgrass Baskets"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600">
              Handcrafted with tradition, woven with love. Over 65 years of artistry in every basket.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-amber-600">Home</Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-600 hover:text-amber-600">Collections</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-amber-600">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-amber-600">Contact</Link>
              </li>
              <li>
                <Link to="/order-lookup" className="text-gray-600 hover:text-amber-600">Order Lookup</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  123 Market Street<br />
                  Charleston, SC 29401
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-600">(843) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-600">info@lucillesbaskets.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-600"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-amber-600"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Lucille's Sweetgrass Baskets. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}