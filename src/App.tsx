import React, { useState } from 'react';
import { Play, Ticket, Calendar, Lock, Mail, CreditCard } from 'lucide-react';
import { AuthModal } from './components/AuthModal';

function App() {
  const [activeSection, setActiveSection] = useState('upcoming');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="bg-black/30 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Play className="w-8 h-8 text-emerald-500" />
              <span className="text-xl font-bold">FaNect</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition">
                Purchase Ticket
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-600 hover:border-emerald-500 transition">
                Enter Stream
              </button>
              {user ? (
                <div className="flex items-center space-x-3 ml-4">
                  <span className="text-sm text-gray-300">{user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3 ml-4">
                  <button
                    onClick={() => {
                      setAuthMode('signin');
                      setIsAuthModalOpen(true);
                    }}
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('signup');
                      setIsAuthModalOpen(true);
                    }}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Live Events, One Ticket at a Time
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Access exclusive live streams with simple, one-time tickets. No subscriptions, no complications.
          </p>
        </div>

        {/* Event Sections */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveSection('upcoming')}
              className={`px-4 py-2 rounded-full ${
                activeSection === 'upcoming'
                  ? 'bg-emerald-600'
                  : 'bg-gray-800 hover:bg-gray-700'
              } transition`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveSection('live')}
              className={`px-4 py-2 rounded-full ${
                activeSection === 'live'
                  ? 'bg-emerald-600'
                  : 'bg-gray-800 hover:bg-gray-700'
              } transition`}
            >
              Live Now
            </button>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Event Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
                alt="Event"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2024 - 8:00 PM EST</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Tech Conference 2024</h3>
                <p className="text-gray-400 mb-4">
                  Join industry leaders for an exclusive live event discussing the future of technology.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$49.99</span>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition">
                    <Ticket className="w-4 h-4" />
                    <span>Get Ticket</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Purchase Ticket</h3>
              <p className="text-gray-400">
                Buy your one-time access ticket securely through our payment system.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Receive Code</h3>
              <p className="text-gray-400">
                Get your unique access code via email or SMS instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join Stream</h3>
              <p className="text-gray-400">
                Enter your code and enjoy high-quality live streaming content.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Play className="w-6 h-6 text-emerald-500" />
              <span className="font-bold">FaNect</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onAuth={(email: string) => setUser({ email })}
      />
    </div>
  );
}

export default App;