import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://static.wixstatic.com/media/c73eb8_f6183422ffa746ecb370bf17d178ce45~mv2.jpg"
          alt="Sweetgrass Basket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Lucille's Sweetgrass Baskets
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Handcrafted with tradition, woven with love. Over 65 years of artistry in every basket.
        </p>
        <Link
          to="/collections"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700"
        >
          Shop Collection
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}