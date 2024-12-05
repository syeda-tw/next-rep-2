// app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to /dashboard immediately when this page is loaded
  redirect('/dashboard');

  return null; // Don't render anything, as the redirect happens immediately
}
