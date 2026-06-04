'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Package, Shield } from 'lucide-react';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        if (data.success) {
          setProducts(data.data.slice(0, 6));
        }
      } catch (error) {
        console.error('[v0] Failed to fetch products:', error);
        // Use mock data if API fails
        setProducts([
          {
            _id: '1',
            name: 'Premium Wireless Headphones',
            description: 'High-quality sound with noise cancellation',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            rating: 4.5,
            category: 'Electronics',
          },
          {
            _id: '2',
            name: 'Elegant Watch',
            description: 'Sophisticated timepiece for everyday wear',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop',
            rating: 4.8,
            category: 'Fashion',
          },
          {
            _id: '3',
            name: 'Smart Phone Stand',
            description: 'Adjustable stand for your devices',
            price: 29.99,
            image: 'https://images.unsplash.com/photo-1591290619762-88d7ee7820aa?w=400&h=300&fit=crop',
            rating: 4.2,
            category: 'Accessories',
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Welcome to Nadia Store
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-balance">
              Discover premium products designed for your lifestyle. Quality, elegance, and innovation in every item.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Shipping',
                description: 'Get your orders delivered quickly to your doorstep',
              },
              {
                icon: Package,
                title: 'Quality Products',
                description: 'Handpicked selection of premium items',
              },
              {
                icon: Shield,
                title: 'Secure Shopping',
                description: 'Your privacy and security are our priority',
              },
            ].map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={i}
                  className="text-center p-8 rounded-xl bg-gray-50 dark:bg-slate-800 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <IconComponent size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Featured Products
            </h2>
            <Link href="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  category={product.category}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Discover Amazing Products?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers exploring premium items at Nadia Store.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Shopping Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
