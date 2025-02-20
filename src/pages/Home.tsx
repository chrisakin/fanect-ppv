import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Home/Hero';
import { HowItWorks } from '../components/Home/HowItWorks';
import { Events } from './Events';

export function Home() {
  const navigate = useNavigate();

  const handlePurchaseClick = () => {
    window.dispatchEvent(new CustomEvent('openPurchaseModal'));
  };

  const handleWatchEvent = () => {
    window.dispatchEvent(new CustomEvent('openTicketModal'));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <Events 
        onPurchaseClick={handlePurchaseClick}
        onWatchEvent={handleWatchEvent}
      />
      <HowItWorks />
    </main>
  );
}