import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LetterContent from './LetterContent';
import { getAllLetters, getLetterBySlug } from '@/lib/letters';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const letters = getAllLetters();
  return letters.map((letter) => ({
    slug: letter.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const letter = getLetterBySlug(slug);
  
  if (!letter) {
    return {
      title: 'Letter Not Found',
    };
  }

  return {
    title: letter.title,
    description: letter.description,
  };
}

export default async function LetterPage({ params }: PageProps) {
  const { slug } = await params;
  const letter = getLetterBySlug(slug);

  if (!letter) {
    notFound();
  }

  return <LetterContent letter={letter} />;
}
