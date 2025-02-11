import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Working with this team has transformed our digital infrastructure. Their expertise and dedication are unmatched.'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateTech',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'The solutions they delivered exceeded our expectations. A truly professional and innovative team.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, DataFlow',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'Their attention to detail and technical expertise helped us achieve our digital transformation goals.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-[#1a237e] to-[#40c4ff]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrevious}
              className="absolute left-0 z-10 p-2 text-white hover:text-[#40c4ff] transition-colors duration-300 md:text-base text-[1rem]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="w-full max-w-3xl">
              <div className="text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <blockquote className="text-[12px] md:text-[14px] text-white mb-6 md:px-[20px] px-[35px]">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="text-white">
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-white/80">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 text-white hover:text-[#40c4ff] transition-colors duration-300 md:text-base text-[1rem]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;