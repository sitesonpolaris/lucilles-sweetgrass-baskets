export interface Product {
  id: string;
  priceId: string;
  name: string;
  category: 'baskets' | 'paraphernalia';
  price: number;
  dimensions: {
    length?: number;
    width?: number;
    depth?: number;
    diameter?: number;
  };
  description: string;
  images: string[];
  inStock: boolean;
}