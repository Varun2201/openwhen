'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface LetterCardProps {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  index: number;
}

export default function LetterCard({ slug, title, emoji, description, index }: LetterCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <Link href={`/letter/${slug}`} className="block">
        <motion.div
          className="group relative cursor-pointer"
          whileHover={{ 
            y: -6,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* Envelope shadow */}
          <div className="absolute inset-0 bg-[#e0d9d0] rounded-lg transform translate-x-1 translate-y-1" />
          
          {/* Main envelope - fixed dimensions */}
          <div 
            className="relative bg-gradient-to-br from-[#faf7f2] via-[#f8f5f0] to-[#f3ede4] 
                       rounded-lg overflow-hidden"
            style={{
              width: '100%',
              height: '180px',
              boxShadow: '0 8px 30px rgba(139, 115, 85, 0.15), 0 2px 8px rgba(139, 115, 85, 0.1)',
              border: '1px solid rgba(212, 206, 196, 0.5)',
            }}
          >
            {/* Envelope flap */}
            <div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-br from-[#ebe6df] to-[#ddd6cb]"
              style={{
                height: '60px',
                clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              }}
            />
            
            {/* Wax seal */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center text-base
                           group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'linear-gradient(135deg, #c9a882 0%, #a08060 50%, #8b7355 100%)',
                  boxShadow: '0 2px 8px rgba(139, 115, 85, 0.4)',
                }}
              >
                {emoji}
              </div>
            </div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              {/* Title */}
              <h3 
                className="text-sm font-medium text-[#3d2e22] mb-1.5 leading-snug truncate"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {title}
              </h3>
              
              {/* Decorative line */}
              <div className="flex justify-center mb-1.5">
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#b8a99a] to-transparent" />
              </div>
              
              {/* Description */}
              <p 
                className="text-xs text-[#6b5a4a] italic truncate px-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {description}
              </p>
              
              {/* Open indicator */}
              <div className="mt-2">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[#a08060]
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to open
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
