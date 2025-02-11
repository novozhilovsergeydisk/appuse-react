import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#40c4ff] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1a237e]">Email Us</h3>
                <p className="text-gray-600">contact@techpro.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#40c4ff] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1a237e]">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#40c4ff] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1a237e]">Visit Us</h3>
                <p className="text-gray-600">
                  123 Tech Street, Silicon Valley, CA 94025
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#40c4ff] focus:ring-2 focus:ring-[#40c4ff]/20 transition-all duration-300"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#40c4ff] focus:ring-2 focus:ring-[#40c4ff]/20 transition-all duration-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#40c4ff] focus:ring-2 focus:ring-[#40c4ff]/20 transition-all duration-300"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#40c4ff] focus:ring-2 focus:ring-[#40c4ff]/20 transition-all duration-300"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a237e] hover:bg-[#40c4ff] text-white py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;