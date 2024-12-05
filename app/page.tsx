'use client'

import { redirect } from 'next/navigation';
import { useUser } from '@clerk/nextjs'; // Example: use Clerk for user data

export default function HomePage() {
  const { isSignedIn } = useUser(); // Check if user is signed in (for example with Clerk)

  if (!isSignedIn) {
    redirect('/login'); // Redirect to login page if the user is not signed in
  }

  // If signed in, redirect to '/home'
  redirect('/home');

  return null; // You can also return a loading screen or null if you just want the redirect
}
