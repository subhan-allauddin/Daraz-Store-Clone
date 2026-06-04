import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import Card from './Card';
import Button from './Button';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating = 0,
  category,
}: ProductCardProps) {
  return (
    <Card hover>
      <Link href={`/products/${id}`}>
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-semibold">
            {category}
          </div>
        </div>
      </Link>

      <Link href={`/products/${id}`}>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400">
          {name}
        </h3>
      </Link>

      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      {rating > 0 && (
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-400">({rating.toFixed(1)})</span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          ${price.toFixed(2)}
        </span>
        <Button variant="primary" size="sm" className="flex items-center space-x-2">
          <ShoppingCart size={16} />
          <span>Add</span>
        </Button>
      </div>
    </Card>
  );
}
