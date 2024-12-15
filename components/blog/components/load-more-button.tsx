'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center mt-8"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
        className="relative group flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300"
      >
        <span className="flex items-center gap-2">
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            'Load More'
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
      </motion.button>
    </motion.div>
  );
}