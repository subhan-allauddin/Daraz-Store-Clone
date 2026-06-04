import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800
        border border-gray-200 dark:border-slate-700
        rounded-xl p-6
        ${hover ? 'hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300' : 'shadow-sm'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
