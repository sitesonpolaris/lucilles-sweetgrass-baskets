import React from 'react';
import { products } from '../data/products';
import HeroSlideshow from '../components/home/HeroSlideshow';
import FeaturedCollections from '../components/home/FeaturedCollections';
import FeaturedParaphernalia from '../components/home/FeaturedParaphernalia';
import ValueProposition from '../components/home/ValueProposition';
import ArtistSpotlight from '../components/home/ArtistSpotlight';

export default function Home() {
  const basketProducts = products.filter(p => p.category === 'baskets');
  const featuredParaphernalia = products.filter(p => p.category === 'paraphernalia');

  return (
    <div className="space-y-16">
      <HeroSlideshow />
      <ValueProposition />
      <FeaturedCollections products={basketProducts} />
      <ArtistSpotlight />
      <FeaturedParaphernalia products={featuredParaphernalia} />
    </div>
  );
}