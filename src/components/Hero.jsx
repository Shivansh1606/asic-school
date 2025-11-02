import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
      title: 'Welcome to ASIC Mawana',
      subtitle: 'Excellence in Education Since 1947',
      fallback: 'https://source.unsplash.com/1920x1080/?college,education'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
      title: 'Building Future Leaders',
      subtitle: 'Quality Education for All',
      fallback: 'https://source.unsplash.com/1920x1080/?university,students'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80',
      title: 'Empowering Through Knowledge',
      subtitle: 'Join Our Academic Community',
      fallback: 'https://source.unsplash.com/1920x1080/?school,learning'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = slide.fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 pb-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-3xl text-white mb-8 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/registration"
              className="bg-[#FDB813] text-[#0C2E5C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="bg-white text-[#0C2E5C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FDB813] hover:scale-105 transition-all shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0C2E5C] p-4 rounded-full transition-all shadow-lg hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#0C2E5C] p-4 rounded-full transition-all shadow-lg hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#FDB813] w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
