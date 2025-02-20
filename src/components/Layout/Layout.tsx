import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  user: { email: string } | null;
  onSignOut: () => void;
  onPurchaseClick: () => void;
  onAuthModalOpen: (mode: 'signin' | 'signup') => void;
}

export function Layout({ children, user, onSignOut, onPurchaseClick, onAuthModalOpen }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar
        user={user}
        onSignOut={onSignOut}
        onPurchaseClick={onPurchaseClick}
        onAuthModalOpen={onAuthModalOpen}
      />
      {children}
      <Footer />
    </div>
  );
}