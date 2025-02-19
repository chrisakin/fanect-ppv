import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Play, Ticket, Calendar, Lock, Mail, CreditCard, X } from 'lucide-react';
import { PaystackButton } from 'react-paystack';
import { AuthModal } from './components/AuthModal';
import { LiveStream } from './pages/LiveStream';

function App() {
  const [activeSection, setActiveSection] = useState('upcoming');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [paymentEmail, setPaymentEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketCode, setTicketCode] = useState('');
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(null);
  };

  const handlePurchaseClick = () => {
    setShowEmailInput(true);
  };

  const handleWatchNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTicketModal(true);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate the ticket code against your backend
    // For now, we'll just check if both fields are filled
    if (ticketEmail && ticketCode) {
      setShowTicketModal(false);
      setTicketEmail('');
      setTicketCode('');
      navigate('/live/dQw4w9WgXcQ');
    }
  };

  const componentProps = {
    email: paymentEmail,
    amount: 49999 * 100,
    publicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    text: "Proceed to Payment",
    onSuccess: () => {
      console.log('Payment successful');
      setShowEmailInput(false);
      setPaymentEmail('');
    },
    onClose: () => {
      console.log('Payment cancelled');
    }
  };

  const HomePage = () => (
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
              <button 
                onClick={handlePurchaseClick}
                className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition"
              >
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

      {/* Email Input Modal */}
      {showEmailInput && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Enter Your Email</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  value={paymentEmail}
                  onChange={(e) => setPaymentEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="flex space-x-3">
                {paymentEmail && (
                  <PaystackButton
                    {...componentProps}
                    className="flex-1 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
                  />
                )}
                <button
                  type="button"
                  onClick={() => {
                    setShowEmailInput(false);
                    setPaymentEmail('');
                  }}
                  className="py-2 px-4 rounded-lg border border-gray-600 hover:border-emerald-500 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ticket Verification Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowTicketModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-bold mb-6">Enter Ticket Details</h2>
            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  value={ticketEmail}
                  onChange={(e) => setTicketEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Ticket Code</label>
                <input
                  type="text"
                  value={ticketCode}
                  onChange={(e) => setTicketCode(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="Enter your ticket code"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
                >
                  Watch Stream
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowTicketModal(false);
                    setTicketEmail('');
                    setTicketCode('');
                  }}
                  className="py-2 px-4 rounded-lg border border-gray-600 hover:border-emerald-500 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            {activeSection === 'upcoming' ? (
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
                    <span className="text-lg font-bold">₦49,999</span>
                    <button 
                      onClick={handlePurchaseClick}
                      className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Get Ticket</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-emerald-500 transition">
                <img
                  src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
                  alt="Live Event"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-red-500 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <span>LIVE NOW</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live Music Festival 2024</h3>
                  <p className="text-gray-400 mb-4">
                    Experience the energy and excitement of our annual music festival, streaming live from multiple stages.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Live Stream</span>
                    <button 
                      onClick={handleWatchNowClick}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
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

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/live/:id" element={<LiveStream />} />
    </Routes>
  );
}

export default App;