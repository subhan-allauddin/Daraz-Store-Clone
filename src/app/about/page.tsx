import { CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Nadia Store',
  description: 'Learn about Nadia Store, our mission, values, and commitment to excellence.',
};

export default function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We handpick every product to ensure it meets our high standards.',
    },
    {
      title: 'Customer Care',
      description: 'Your satisfaction is our top priority. We provide exceptional support.',
    },
    {
      title: 'Innovation',
      description: 'We continuously update our collection with the latest and greatest products.',
    },
    {
      title: 'Sustainability',
      description: 'We care about the environment and promote sustainable practices.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">About Nadia Store</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the story behind our premium product collection.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Nadia Store, we believe that everyone deserves access to premium products that combine quality, 
                elegance, and innovation. Our mission is to curate the finest selection of items and deliver an 
                exceptional shopping experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded in 2020, we&apos;ve grown into a trusted brand serving thousands of satisfied customers worldwide. 
                We&apos;re committed to maintaining the highest standards of quality and customer care.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Store"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <Card key={i} hover>
                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  {member.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Nadia Store difference today. Shop premium products from brands you trust.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
