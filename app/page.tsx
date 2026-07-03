import HomeClient from '@/components/HomeClient';
import { getAllLetters } from '@/lib/letters';

export default function Home() {
  const letters = getAllLetters();
  return <HomeClient letters={letters} />;
}
