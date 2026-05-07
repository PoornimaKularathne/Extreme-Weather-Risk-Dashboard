import React from 'react';
import { motion } from 'framer-motion';

/*
  Loader Component
  Provides skeleton loading states and spinners
  Maintains consistent styling with the dark theme
*/
interface LoaderProps {
  type?: 'spinner' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({
  type = 'spinner',
  size = 'md',
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (type === 'spinner') {
    return (
      <div className="flex flex-col items-center justify-center py-xl">
        <motion.div
          className={`border-4 border-primary border-t-transparent rounded-full animate-spin ${sizeClasses[size]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {text && (
          <motion.p
            className="text-secondary mt-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  // Skeleton loader for cards
  return (
    <div className="glass-card p-lg animate-pulse">
      <div className="h-6 bg-gray-700 rounded mb-md"></div>
      <div className="h-4 bg-gray-700 rounded mb-sm"></div>
      <div className="h-3 bg-gray-700 rounded mb-lg"></div>
      <div className="h-4 bg-gray-700 rounded mb-sm"></div>
      <div className="grid grid-cols-2 gap-md">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="col-span-2 h-4 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default Loader;