import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Home/Hero';
import { HowItWorks } from '../components/Home/HowItWorks';
import { Events } from './Events';
import { ArrowRight } from 'lucide-react';

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
      <div className="relative">
        <Events 
          onPurchaseClick={handlePurchaseClick}
          onWatchEvent={handleWatchEvent}
        />
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/events')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 transition-colors rounded-full text-white font-medium group"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      <HowItWorks />
    </main>
  );
}