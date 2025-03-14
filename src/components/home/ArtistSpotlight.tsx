import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArtistSpotlight() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Artist</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 65 years of experience in sweetgrass basketry, Lucille Smith carries
              forward a cherished tradition passed down through generations. Taught by her
              grandmother at the age of 5, each basket represents a legacy of craftsmanship
              and cultural heritage.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-amber-600 hover:text-amber-700"
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative aspect-square">
            <img
              src="https://static.wixstatic.com/media/c73eb8_ec322889076447f6b11d930549fc53e6~mv2.jpg"
              alt="Lucille Smith"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}