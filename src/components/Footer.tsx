import React from 'react';
import { Monitor, Facebook, Twitter, Linkedin as LinkedIn, Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-8 w-8 text-[#40c4ff]" />
              <span className="ml-2 text-xl font-bold">Appuse</span>
            </div>
            <p className="text-gray-300">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Projects', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#40c4ff] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#40c4ff] text-gray-900 w-full"
              />
              <button
                type="submit"
                className="bg-[#40c4ff] hover:bg-[#40c4ff]/80 px-4 py-2 rounded-r-lg transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-6 h-6" />, label: 'Facebook' },
                { icon: <Twitter className="w-6 h-6" />, label: 'Twitter' },
                { icon: <LinkedIn className="w-6 h-6" />, label: 'LinkedIn' },
                { icon: <Instagram className="w-6 h-6" />, label: 'Instagram' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-gray-300 hover:text-[#40c4ff] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Appuse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;