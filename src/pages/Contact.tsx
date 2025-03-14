import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about our products or interested in placing a custom order?
            We'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Visit Us</h3>
                <p className="mt-2 text-gray-600">
                  123 Market Street<br />
                  Charleston, SC 29401
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Call Us</h3>
                <p className="mt-2 text-gray-600">(843) 555-0123</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900">Email Us</h3>
                <p className="mt-2 text-gray-600">info@lucillesbaskets.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}