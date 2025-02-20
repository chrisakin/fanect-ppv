import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Play, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  user: { email: string } | null;
  onSignOut: () => void;
  onPurchaseClick: () => void;
  onAuthModalOpen: (mode: 'signin' | 'signup') => void;
}

export function Navbar({ user, onSignOut, onAuthModalOpen }: NavbarProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handlePurchaseClick = () => {
    setIsMenuOpen(false);
    navigate('/events');
  };

  const handleSignIn = () => {
    setIsMenuOpen(false);
    onAuthModalOpen('signin');
  };

  const handleSignUp = () => {
    setIsMenuOpen(false);
    onAuthModalOpen('signup');
  };

  const handleSignOut = () => {
    setIsMenuOpen(false);
    onSignOut();
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
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
            <span className="text-lg sm:text-xl font-bold">FaNect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
                <Link 
                  to="/dashboard"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm">{user.email}</span>
                </Link>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={handlePurchaseClick}
              className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
            >
              Purchase Ticket
            </button>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
            >
              Browse Events
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded-lg"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}