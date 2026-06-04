'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('[v0] Contact form error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-slate-900 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We&apos;d love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <Phone size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone</h3>
                <a href="tel:+15551234567" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  +1 (555) 123-4567
                </a>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <Mail size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:info@nadiastore.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  info@nadiastore.com
                </a>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
                  <MapPin size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Store Street<br />
                  City, State 12345
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
