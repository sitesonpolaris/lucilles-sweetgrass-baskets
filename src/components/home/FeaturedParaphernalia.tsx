import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import ProductDetailModal from '../products/ProductDetailModal';

interface FeaturedParaphernaliaProps {
  products: Product[];
}

export default function FeaturedParaphernalia({ products }: FeaturedParaphernaliaProps) {
  const { dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity: 1 } });
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="bg-amber-10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Accessories Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a piece of Charleston's sweetgrass tradition with you wherever you go
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div
                className="relative aspect-square overflow-hidden rounded-t-lg cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickAdd(e, product);
                    }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-lg font-medium text-amber-600">${product.price}</p>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}

        <div className="mt-12 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            View All Accessories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}