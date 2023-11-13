"use client";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { Hero } from './components/Hero';
import { ChatBox } from './components/ChatBox';

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-100 min-h-screen">
      {
        user ? <ChatBox /> : <Hero />
      }
    </div>
  )
}
