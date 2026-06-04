'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
          
          // Extract unique categories
          const uniqueCategories = [...new Set(data.data.map((p: Product) => p.category))];
          setCategories(uniqueCategories as string[]);
          
          setFilteredProducts(data.data);
        }
      } catch (error) {
        console.error('[v0] Failed to fetch products:', error);
        // Mock data fallback
        const mockProducts: Product[] = [
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
          {
            _id: '4',
            name: 'Portable Speaker',
            description: 'Compact speaker with great sound quality',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1589003077984-894e133814c9?w=400&h=300&fit=crop',
            rating: 4.6,
            category: 'Electronics',
          },
          {
            _id: '5',
            name: 'Sunglasses',
            description: 'UV protection with stylish design',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
            rating: 4.3,
            category: 'Fashion',
          },
          {
            _id: '6',
            name: 'Phone Case',
            description: 'Durable protection for your device',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1601822261290-991b38693d1b?w=400&h=300&fit=crop',
            rating: 4.4,
            category: 'Accessories',
          },
        ];
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setCategories(['Electronics', 'Fashion', 'Accessories']);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our Products</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our curated collection of premium products
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Filter size={20} className="text-slate-900 dark:text-white" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Filter by Category</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-700'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600" />
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
