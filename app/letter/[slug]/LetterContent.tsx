'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MarkdownContent from '@/components/MarkdownContent';
import ReadingProgress from '@/components/ReadingProgress';
import { Letter } from '@/lib/letters';

interface LetterContentProps {
  letter: Letter;
}

export default function LetterContent({ letter }: LetterContentProps) {
  return (
    <>
      <ReadingProgress />
      
      <main className="min-h-screen paper-texture">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mx-auto px-6 py-12 md:py-20"
        >
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#8b7a6a] hover:text-[#5c4a3a] 
                         transition-colors duration-300 mb-10 group"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <svg 
                className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm uppercase tracking-wider">All Letters</span>
            </Link>
          </motion.div>

          {/* Letter container - styled like a real letter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Paper background */}
            <div 
              className="bg-white rounded-lg overflow-hidden"
              style={{
                boxShadow: '0 10px 40px rgba(139, 115, 85, 0.1), 0 2px 10px rgba(139, 115, 85, 0.05)',
                border: '1px solid #ebe6df',
              }}
            >
              {/* Letter header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="px-8 md:px-12 pt-10 md:pt-12 pb-6 border-b border-[#ebe6df]"
                style={{ 
                  fontFamily: 'Georgia, serif',
                  backgroundImage: 'linear-gradient(to bottom, #faf8f5 0%, white 100%)',
                }}
              >
                {/* Emoji */}
                <div className="text-4xl mb-5">{letter.emoji}</div>
                
                {/* Title */}
                <h1 
                  className="text-2xl md:text-3xl font-normal text-[#3d2e22] mb-3 leading-tight"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {letter.title}
                </h1>
                
                {/* Date */}
                {letter.date && (
                  <p 
                    className="text-sm text-[#a08060] uppercase tracking-widest"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {letter.date}
                  </p>
                )}
              </motion.header>

              {/* Letter body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="px-8 md:px-12 py-10 md:py-12"
              >
                <MarkdownContent content={letter.content} />
                
                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-12 pt-8 border-t border-[#ebe6df]"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <p className="text-[#5c4a3a] text-lg italic mb-1">
                    Until the next letter,
                  </p>
                  <p className="text-[#5c4a3a] text-lg italic mb-2">
                    Yours,
                  </p>
                  <p className="text-[#3d2e22] text-xl not-italic">
                    Varun
                  </p>
                </motion.div>
              </motion.div>

              {/* Paper texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </motion.div>

          {/* Back to all letters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mt-10 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f2ed] text-[#5c4a3a] 
                         rounded-full text-sm uppercase tracking-wider hover:bg-[#ebe6df] 
                         transition-colors duration-300"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to all letters
            </Link>
          </motion.div>
        </motion.article>
      </main>
    </>
  );
}
