import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: 'https://static.wixstatic.com/media/c73eb8_f6183422ffa746ecb370bf17d178ce45~mv2.jpg',
    headline: 'Handcrafted with Love Since 1958',
    description: 'Each basket tells a story of tradition, skill, and dedication passed down through generations.',
    ctaText: 'Shop Collection',
    ctaLink: '/collections'
  },
  {
    image: 'https://static.wixstatic.com/media/c73eb8_b2ad17f0295748c7be3eca9adfc87000~mv2.jpg',
    headline: 'New Summer Collection Available Now',
    description: 'Discover our latest collection of handwoven sweetgrass baskets, perfect for any occasion.',
    ctaText: 'View New Arrivals',
    ctaLink: '/collections'
  },
  {
    image: 'https://static.wixstatic.com/media/c73eb8_8224fa5576e14ed8bc4498df4b5d418c~mv2.jpg',
    headline: 'Custom Orders Welcome',
    description: 'Let us create a unique piece that perfectly matches your style and needs.',
    ctaText: 'Contact Us',
    ctaLink: '/contact'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const previousSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          }`}
          aria-hidden={currentSlide !== index}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 
                className={`text-4xl md:text-6xl font-bold text-white mb-6 transform transition-transform duration-500 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slide.headline}
              </h1>
              <p 
                className={`text-xl text-white mb-8 max-w-2xl mx-auto transform transition-transform duration-500 delay-100 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slide.description}
              </p>
              <Link
                to={slide.ctaLink}
                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transform transition-all duration-500 delay-200 ${
                  isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </section>
  );
}