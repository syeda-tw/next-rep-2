// app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/home');

  return null; // Don't render anything, as the redirect happens immediately
}
