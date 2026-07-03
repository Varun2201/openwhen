import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const lettersDirectory = path.join(process.cwd(), 'content', 'letters');

export interface LetterMeta {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  description: string;
}

export interface Letter extends LetterMeta {
  content: string;
}

export function getAllLetters(): LetterMeta[] {
  // Check if directory exists
  if (!fs.existsSync(lettersDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(lettersDirectory);
  const letters = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(lettersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        emoji: data.emoji || '💌',
        description: data.description || '',
      };
    });

  // Sort by predefined order
  const order = [
    'anxious',
    'miss-me',
    'not-enough',
    'bad-day',
    'achieved-something',
    'need-a-hug',
  ];

  return letters.sort((a, b) => {
    return order.indexOf(a.slug) - order.indexOf(b.slug);
  });
}

export function getLetterBySlug(slug: string): Letter | null {
  try {
    const fullPath = path.join(lettersDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || '',
      emoji: data.emoji || '💌',
      description: data.description || '',
      content,
    };
  } catch {
    return null;
  }
}
