import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

interface NavbarProps {
  user: { email: string } | null;
  onSignOut: () => void;
  onPurchaseClick: () => void;
  onAuthModalOpen: (mode: 'signin' | 'signup') => void;
}

export function Navbar({ user, onSignOut, onAuthModalOpen }: NavbarProps) {
  const navigate = useNavigate();

  const handlePurchaseClick = () => {
    navigate('/events');
  };

  return (
    <nav className="bg-black/30 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105"
            title="Back to Home"
          >
            <Play className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold">FaNect</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handlePurchaseClick}
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition"
            >
              Purchase Ticket
            </button>
            <Link 
              to="/events" 
              className="px-4 py-2 rounded-full border border-gray-600 hover:border-emerald-500 transition"
            >
              Browse Events
            </Link>
            {user ? (
              <div className="flex items-center space-x-3 ml-4">
                <span className="text-sm text-gray-300">{user.email}</span>
                <button
                  onClick={onSignOut}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-4">
                <button
                  onClick={() => onAuthModalOpen('signin')}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onAuthModalOpen('signup')}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}