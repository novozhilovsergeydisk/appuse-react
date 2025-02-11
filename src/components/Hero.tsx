import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e]/90 to-[#40c4ff]/90 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center -z-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas Into
            <span className="block text-[#40c4ff]">Digital Reality</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            We deliver cutting-edge IT solutions that drive innovation and business growth. Let's build the future together.
          </p>
          <button className="group bg-[#40c4ff] hover:bg-[#1a237e] text-white px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;