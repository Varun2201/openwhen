'use client';

import { motion } from 'framer-motion';
import LetterCard from '@/components/LetterCard';
import { LetterMeta } from '@/lib/letters';

interface HomeClientProps {
  letters: LetterMeta[];
}

export default function HomeClient({ letters }: HomeClientProps) {
  return (
    <main className="min-h-screen paper-texture">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-normal text-[#5c4a3a] mb-8 tracking-wide"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}
          >
            Open When...
          </h1>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent" />
          </div>
          
          {/* Introduction */}
          <div className="max-w-lg mx-auto space-y-5">
            <p 
              className="text-lg text-[#5c4a3a] leading-relaxed"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              These letters aren&apos;t meant to be read all at once.
            </p>
            <p 
              className="text-lg text-[#5c4a3a] leading-relaxed"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              They&apos;re little pieces of me for the days you need them.
            </p>
            <p 
              className="text-base text-[#5c4a3a] leading-relaxed mt-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Open whichever one feels right.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Letters Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {letters.map((letter, index) => (
            <LetterCard
              key={letter.slug}
              slug={letter.slug}
              title={letter.title}
              emoji={letter.emoji}
              description={letter.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Empty state if no letters */}
        {letters.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">💌</div>
            <p 
              className="text-[#5c4a3a] text-lg"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
            >
              Letters are being written with love...
            </p>
            <p className="text-[#8b7355] text-sm mt-2">
              Check back soon
            </p>
          </motion.div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-[#ebe6df]">
        <p 
          className="text-sm text-[#8b7355]"
          style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
        >
          Made with love, for you ❤️
        </p>
      </footer>
    </main>
  );
}
